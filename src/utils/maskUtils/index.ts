import { DocumentModule } from './modules/document'
import { ZipCodeModule } from './modules/zipcode'
import { PhoneModule } from './modules/phone'
import { EmailModule } from './modules/email'
import { SMaskModule, SMaskTypes } from './types'
import { BirthdateModule } from './modules/birthdate'

export const utilsModule: Record<SMaskTypes, SMaskModule> = {
  document: DocumentModule,
  zipcode: ZipCodeModule,
  phone: PhoneModule,
  email: EmailModule,
  birthdate: BirthdateModule
}
