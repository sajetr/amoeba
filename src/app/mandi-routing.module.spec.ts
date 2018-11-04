import { MandiRoutingModule } from './mandi-routing.module';

describe('MandiRoutingModule', () => {
  let mandiRoutingModule: MandiRoutingModule;

  beforeEach(() => {
    mandiRoutingModule = new MandiRoutingModule();
  });

  it('should create an instance', () => {
    expect(mandiRoutingModule).toBeTruthy();
  });
});
