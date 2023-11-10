import Send from '@/images/svg/send.svg'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Input } from '../ui/Input'
import { Textarea } from '../ui/Textarea'

export function ContactForm() {
  const t = useTranslations('Contact')

  return (
    <form className="flex w-full flex-col gap-8">
      <div className="flex gap-8">
        <div className="flex w-full flex-col gap-4">
          <Input
            type="text"
            placeholder={t('secondSection.form.firstColunm.firstInput.label')}
            name={t('secondSection.form.firstColunm.firstInput.name')}
          />

          <Input
            type="text"
            placeholder={t('secondSection.form.firstColunm.secondInput.label')}
            name={t('secondSection.form.firstColunm.secondInput.name')}
          />

          <Input
            type="text"
            placeholder={t('secondSection.form.firstColunm.thirdInput.label')}
            name={t('secondSection.form.firstColunm.thirdInput.name')}
          />

          <Input
            type="text"
            placeholder={t('secondSection.form.firstColunm.fourthInput.label')}
            name={t('secondSection.form.firstColunm.fourthInput.name')}
          />
        </div>

        <div className="flex w-full flex-col gap-4">
          <Input
            type="text"
            placeholder={t('secondSection.form.secondColunm.firstInput.label')}
            name={t('secondSection.form.secondColunm.firstInput.name')}
          />

          <Input
            type="text"
            placeholder={t('secondSection.form.secondColunm.secondInput.label')}
            name={t('secondSection.form.secondColunm.secondInput.name')}
          />

          <Input
            type="text"
            placeholder={t('secondSection.form.secondColunm.thirdInput.label')}
            name={t('secondSection.form.secondColunm.thirdInput.name')}
          />

          <Input
            type="text"
            placeholder={t('secondSection.form.secondColunm.fourthInput.label')}
            name={t('secondSection.form.secondColunm.fourthInput.name')}
          />
        </div>
      </div>

      <Textarea placeholder={t('secondSection.form.textarea.label')} rows={5} />

      <button className="flex items-center justify-center gap-2 self-end">
        <span className="leading-3">{t('secondSection.form.button')}</span>
        <Image
          src={Send}
          alt={t('secondSection.form.button')}
          width={24}
          height={24}
        />
      </button>
    </form>
  )
}
