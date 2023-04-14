import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import ProfilePage from '../ProfilePage/ProfilePage'
import Card from 'pages/Card/Card'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Card />
      <ProfilePage />
    </Page>
  )
}
export default HomePage;
