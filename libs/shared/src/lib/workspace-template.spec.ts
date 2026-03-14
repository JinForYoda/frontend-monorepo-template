import {
  defaultWorkspaceTemplate,
  workspaceTemplateSchema,
} from './workspace-template';

describe('workspaceTemplateSchema', () => {
  it('parses the default template metadata', () => {
    expect(
      workspaceTemplateSchema.parse(defaultWorkspaceTemplate),
    ).toEqual(defaultWorkspaceTemplate);
  });
});
