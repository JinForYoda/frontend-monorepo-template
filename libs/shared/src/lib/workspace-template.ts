import { z } from 'zod';

export const workspaceTemplateSchema = z.object({
  name: z.string().min(1),
  packageManager: z.enum(['bun']),
  appName: z.string().min(1),
  libraries: z.array(z.string().min(1)).min(1),
});

export type WorkspaceTemplate = z.infer<typeof workspaceTemplateSchema>;

export const defaultWorkspaceTemplate: WorkspaceTemplate =
  workspaceTemplateSchema.parse({
    name: 'frontend-monorepo-template',
    packageManager: 'bun',
    appName: 'web',
    libraries: ['shared', 'ui'],
  });
