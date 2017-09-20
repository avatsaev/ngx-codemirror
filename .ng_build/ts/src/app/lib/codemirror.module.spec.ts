import { CodeMirrorModule } from './codemirror.module';

describe('CodeMirrorModule', () => {
  let codemirrorModule: CodeMirrorModule;

  beforeEach(() => {
    codemirrorModule = new CodeMirrorModule();
  });

  it('should create an editorInstance', () => {
    expect(codemirrorModule).toBeTruthy();
  });
});
