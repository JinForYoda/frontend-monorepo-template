import { workspaceTemplateSchema } from '@template/shared';
import { Button } from '@template/ui';

export function App() {
  const template = workspaceTemplateSchema.parse({
    name: 'frontend-monorepo-template',
    packageManager: 'bun',
    appName: 'web',
    libraries: ['shared', 'ui'],
  });

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-10 text-stone-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-400/30 bg-amber-300/10 px-3 py-1 text-sm text-amber-200">
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          Nx template starter
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Start a modern frontend monorepo without carrying product baggage.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-stone-300">
              This template ships with Nx, React, Vite, Tailwind, Storybook,
              Vitest, Zod and a semantic-release skeleton, so new repos start
              from a working baseline instead of a blank folder.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button label="Run nx serve web" variant="primary" />
              <Button label="Run nx storybook ui" variant="secondary" />
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
              Starter shape
            </p>
            <dl className="mt-6 space-y-4 text-sm text-stone-200">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <dt>App</dt>
                <dd>{template.appName}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
                <dt>Libraries</dt>
                <dd>{template.libraries.join(', ')}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Package manager</dt>
                <dd>{template.packageManager}</dd>
              </div>
            </dl>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default App;

if (import.meta.vitest) {
  // add tests related to your file here
  // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html

  const { it, expect, beforeEach } = import.meta.vitest;
  let render: typeof import('@testing-library/react').render;

  beforeEach(async () => {
    render = (await import('@testing-library/react')).render;
  });

  it('should render the starter headline', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should surface the starter commands', () => {
    const { getAllByText } = render(<App />);
    expect(getAllByText(/nx storybook ui/i).length > 0).toBeTruthy();
  });
}
