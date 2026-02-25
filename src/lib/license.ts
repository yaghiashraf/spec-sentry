import * as jose from 'jose';

export interface LicenseStatus {
  isValid: boolean;
  tier: 'demo' | 'paid';
  features: string[];
}

export async function checkLicense(): Promise<LicenseStatus> {
  const licenseKey = process.env.LICENSE_KEY;
  const pubKeyString = process.env.NEXT_PUBLIC_LICENSE_PUB_KEY;

  if (!licenseKey || !pubKeyString) {
    return { isValid: false, tier: 'demo', features: [] };
  }

  try {
    const publicJwk = JSON.parse(pubKeyString);
    const publicKey = await jose.importJWK(publicJwk, 'RS256');
    const { payload } = await jose.jwtVerify(licenseKey, publicKey, {
      issuer: 'spec-sentry:license',
    });

    return {
      isValid: true,
      tier: payload.tier as 'demo' | 'paid',
      features: (payload.features as string[]) || [],
    };
  } catch (err) {
    console.error('License verification failed:', err);
    return { isValid: false, tier: 'demo', features: [] };
  }
}
