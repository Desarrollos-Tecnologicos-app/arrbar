import { schedule} from 'node-cron'
import { getProductsPcTech, dropCollection } from '../services/products.service';

const scheduleGetCategories = async () => { 

  schedule('0 */4 * * *', async() => {
    await dropCollection()
  })

  schedule('1 */4 * * *', async() => {
    await getProductsPcTech()
  })

}

export { scheduleGetCategories }