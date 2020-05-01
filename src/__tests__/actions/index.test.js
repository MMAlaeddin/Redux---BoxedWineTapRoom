import * as actions from './../../actions';

describe('barrel actions', () => {
  it('deleteBarrel should create DELETE_BARREL action', () => {
    expect(actions.deleteBarrel(1)).toEqual({
      type: 'DELETE_BARREL',
      id: 1
    });
  });
    it('toggleFrom should create TOGGLE_FORM action', () => {
      expect(actions.toggleForm()).toEqual({
        type: 'TOGGLE_FORM'
      });
  
  });
});
