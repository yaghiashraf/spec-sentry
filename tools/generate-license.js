const jose = require('jose');
const fs = require('fs');
const crypto = require('crypto');

async function generate() {
  // Generate a new key pair
  const { publicKey, privateKey } = await crypto.subtle.generateKey(
    {
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify']
  );

  const privateJwk = await crypto.subtle.exportKey('jwk', privateKey);
  const publicJwk = await crypto.subtle.exportKey('jwk', publicKey);

  const importedPrivateKey = await jose.importJWK(privateJwk, 'RS256');
  
  const jwt = await new jose.SignJWT({
    tier: 'paid',
    features: ['unlimited_specs', 'scheduled_watch', 'pr_automation']
  })
    .setProtectedHeader({ alg: 'RS256' })
    .setIssuedAt()
    .setIssuer('spec-sentry:license')
    .setExpirationTime('10y')
    .sign(importedPrivateKey);

  console.log('--- PUBLIC KEY FOR ENV (NEXT_PUBLIC_LICENSE_PUB_KEY) ---');
  console.log(JSON.stringify(publicJwk));
  console.log('\\n--- LICENSE KEY (LICENSE_KEY) ---');
  console.log(jwt);
  console.log('\\nSave NEXT_PUBLIC_LICENSE_PUB_KEY and LICENSE_KEY in your .env.local file.');
}

generate().catch(console.error);
