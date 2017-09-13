import { ChangeFlashModule } from './change-flash.module';

describe('ChangeFlashModule', () => {
  let changeFlashModule: ChangeFlashModule;

  beforeEach(() => {
    changeFlashModule = new ChangeFlashModule();
  });

  it('should create an instance', () => {
    expect(changeFlashModule).toBeTruthy();
  });
});
