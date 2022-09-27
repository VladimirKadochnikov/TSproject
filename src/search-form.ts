import { renderBlock } from './lib.js'

export function renderSearchFormBlock () {
  
  const newDate: Date = new Date();
  const dateNow = newDate.toLocaleDateString('ru-RU')
  const defaultInDate = new Date(newDate.getTime() + 86400000)
  const defaultOutDate = new Date(defaultInDate.getTime() + 2 * 86400000)
    
  newDate.setMonth(newDate.getMonth() + 2)
  newDate.setDate(0)
  const maxDate = newDate.toLocaleDateString('ru-RU')
    
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${defaultInDate.toLocaleDateString('ru-RU')}" min="${dateNow}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${defaultOutDate.toLocaleDateString('ru-RU')}" min="${defaultOutDate.toLocaleDateString('ru-RU')}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
