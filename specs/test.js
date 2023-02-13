describe('Test E2E.', function() {
    it('Comprueba el título de la página.', function() {
      browser.get('http://localhost:8100');
      expect(browser.getTitle()).toEqual('Listado de imágenes');
    });

    it('Comprueba que se carga el listado y se obtiene correctamente el ID 3.', () => {
      browser.wait(() => element(by.css('.gridListCol')).isPresent(), 1000);
      expect(element.all(by.css('.top-left')).get(3).getAttribute('textContent')).toBe('ID: 3');
    });

    it('Comprueba que no se obtienen resultados al buscar el texto "SIN RESULTADOS".', function() {
      element(by.css('.searchbar-input')).clear();
      element(by.css('.searchbar-input')).sendKeys('SIN RESULTADOS');

      browser.wait(() => element(by.id('noTextFound')).isPresent(), 1000);

      expect(element(by.id('noTextFound')).getAttribute('textContent')).toBe('No se ha encontrado contenido.');
    });

    it('Comprueba que se obtienen resultados correctos al buscar el ID 500.', () => {
      element(by.css('.searchbar-input')).clear();
      element(by.css('.searchbar-input')).sendKeys('500');
      
      browser.wait(() => element(by.css('.gridListCol')).isPresent(), 5000);
      expect(element.all(by.css('.top-left')).get(0).getAttribute('textContent')).toBe('ID: 500');
    });

});