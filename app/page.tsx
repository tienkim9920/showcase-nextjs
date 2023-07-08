import { IcLogoHeader } from '@/public/icons/IcLogoHeader'
import { IcCarLogo } from '@/public/icons/IcCarLogo'
import { IcChevronUpDown } from '@/public/icons/IcChevronUpDown'

export default function Home() {
  return (
    <div>
      <IcLogoHeader width='150px' height='auto' />
      <IcCarLogo width='32px' height="32px" />
      <IcChevronUpDown width='32px' height='32px' />
    </div>
  )
}
