'use strict';

aWholeNewWorld('Jafar', function() {

  jafar = new Jafar()

  it('has an occupation of Royal Vizier', function () {
    wish(jafar.showOccupation()).toEqual("Royal Vizier")
  })

  it('has a deep desire to do a variety of evil things', function () {
    wish(jafar.revealDeepestDesire()).toBeArray(true)
  })

  it('has a deep desire to do a variety of specifically evil things', function () {
    wish(jafar.revealDeepestDesire()).toInclude("To Overthrow The Sultan")
  })

  it('Always fails in his attempt to overthrow the The Sultan', function () {
    wish(jafar.overThrowSultan()).toEqual("Failed")
  })

  var jafar
})

