async function yeezysupply(siteInfo, page) {
    const navigationPromise = page.waitForNavigation()
    
    const yzurl = `https://www.yeezysupply.com/product/${siteInfo.productID}`;
    debugger;
    await page.goto(yzurl, {
        timeout: 30000000
    })
    // get page classVar1 && classVar2 , and cartVar's write parse something like
    // that
    const classVar0 = '___1pcjS';
    const classVar1 = '4sltx';
    const classVar2 = '2RlA8';
    const cartVar1 = '___2Q8-_';
    const cartVar2 = '___3A2vH';
    const shoeSizePrefix = 'FV6129';

    await page.waitForSelector(`.ys-pdp-cta-wrapper___${classVar1} > .size-selection___${classVar2} > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__select-element`)
    await page.click(`.ys-pdp-cta-wrapper___${classVar1} > .size-selection___${classVar2} > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__select-element`)

    await page.select(`.ys-pdp-cta-wrapper___${classVar1} > .size-selection___${classVar2} > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__select-element`, `${siteInfo.shoeSizePrefix}${siteInfo.shoeSize}`)

    await page.waitForSelector(`.ys-pdp-cta-wrapper___${classVar1} > .size-selection___${classVar2} > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__select-element`)
    await page.click(`.ys-pdp-cta-wrapper___${classVar1} > .size-selection___${classVar2} > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__select-element`)

    await page.waitForSelector(`.ys-pdp${classVar0} > .col-s-12 > .ys-pdp-cta-wrapper___${classVar1} > .gl-cta > .gl-cta__text`)
    await page.click(`.ys-pdp${classVar0} > .col-s-12 > .ys-pdp-cta-wrapper___${classVar1} > .gl-cta > .gl-cta__text`)

    await page.waitForSelector(`.minicart-modal${cartVar} > .modal${cartVar2}> div > .gl-cta > .gl-cta__text`)
    await page.click(`.minicart-modal${cartVar} > .modal${cartVar2}> div > .gl-cta > .gl-cta__text`)

    await page.waitForSelector('.row #firstName')
    await page.click('.row #firstName')

    await page.type('.row #firstName', firstName)

    await page.type('.row #lastName', siteInfo.lastName)

    await page.type('.row #address1', addressOne)

    await page.type('.row #address2', addressTwo)

    await page.type('.row #city', siteInfo.city)

    await page.waitForSelector('.no-gutters > span > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__' +
      'select-element')
    await page.click('.no-gutters > span > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__' +
      'select-element')

    await page.select('.no-gutters > span > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__' +
      'select-element',
      siteInfo.state)

    await page.waitForSelector('.no-gutters > span > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__' +
      'select-element')
    await page.click('.no-gutters > span > .gl-form-item > .gl-native-dropdown > .gl-native-dropdown__' +
      'select-element')

    await page.waitForSelector('.row #zipcode')
    await page.click('.row #zipcode')

    await page.type('.row #zipCode', siteInfo.zipCode)

    await page.waitForSelector('.row #phoneNumber')
    await page.click('.row #phoneNumber')

    await page.type('.row #phoneNumber', siteInfo.phoneNumber)

    await page.waitForSelector('.row #emailAddress')
    await page.click('.row #emailAddress')

    await page.type('.row #emailAddress', siteInfo.email)

    await page.waitForSelector('div > .desktop-container___1UV4E > .checkout_page___2Rq6- > .row > .col-s-12:nth' +
      '-child(2)')
    await page.click('div > .desktop-container___1UV4E > .checkout_page___2Rq6- > .row > .col-s-12:nth' +
      '-child(2)')

    await page.waitForSelector('.row > .col-s-12 > .col-m-12 > .gl-cta > .gl-cta__text')
    await page.click('.row > .col-s-12 > .col-m-12 > .gl-cta > .gl-cta__text')

    await page.waitForSelector('.row #card-number')
    await page.click('.row #card-number')

    await page.type('.row #card-number', siteInfo.cardNumber)

    await page.waitForSelector('.row #name')
    await page.click('.row #name')

    await page.type('.row #name', siteInfo.nameOnCard)

    await page.waitForSelector('.row #expiryDate')
    await page.click('.row #expiryDate')

    await page.type('.row #expiryDate', siteInfo.cardExpirationDate)

    await page.waitForSelector('.row > .col-s-12 > .order-button-wrapper___2qrPL > .gl-cta > .gl-cta__text')
    await page.click('.row > .col-s-12 > .order-button-wrapper___2qrPL > .gl-cta > .gl-cta__text')

    await page.type('.row #expiryDate', citeInfo.cardCVV)
  }