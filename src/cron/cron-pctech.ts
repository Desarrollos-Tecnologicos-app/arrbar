import { schedule} from 'node-cron'
import { getProductsPcTech } from '../services/products.service';

const scheduleGetCategories = async () => { 

  schedule('0 */2 * * *', async() => {
    await getProductsPcTech()
  }, {
    timezone: 'America/Mexico_City'
  })

}

export { scheduleGetCategories }