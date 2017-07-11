import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('routable/rc-place', 'Integration | Component | routable/rc place', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{routable/rc-place}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#routable/rc-place}}
      template block text
    {{/routable/rc-place}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
