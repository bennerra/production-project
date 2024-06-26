import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTest from '../../../config/i18nForTest'
import { render } from '@testing-library/react'

export function renderWithTranslation (component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTest}>
      {component}
    </I18nextProvider>
  )
}
