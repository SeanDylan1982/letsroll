import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import Gallery from 'components/Gallery'

const HomePage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'home' })}>
      <Typography>{intl.formatMessage({ id: 'home' })}</Typography>
      <Gallery />
    </Page>
  )
}
export default HomePage
