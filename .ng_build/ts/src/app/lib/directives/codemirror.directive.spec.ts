import { CodeMirrorDirective } from './codemirror.directive';
import {ElementRef} from '@angular/core';

describe('CodemirrorDirective', () => {
  it('should create an editorInstance', () => {
    const directive = new CodeMirrorDirective(new ElementRef(''));
    expect(directive).toBeTruthy();
  });
});
