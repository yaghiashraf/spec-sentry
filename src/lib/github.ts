import { Octokit } from '@octokit/rest';

// A helper file to interact with the GitHub repo where SpecSentry runs.
// Next.js will use this to read config/specs.yml, snapshots, and reports.

export const getOctokit = () => {
  return new Octokit({
    auth: process.env.GITHUB_TOKEN, // Needed to read private repos
  });
};

export const getFileContent = async (owner: string, repo: string, path: string) => {
  const octokit = getOctokit();
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
    });
    
    if ('content' in data) {
      return Buffer.from(data.content, 'base64').toString('utf8');
    }
    return null;
  } catch (error) {
    console.error(`Failed to fetch ${path}:`, error);
    return null;
  }
};
