import React, { FC, useState, useCallback } from 'react'
import { Tabs } from '@albatross/ui/lib'
import { t } from '@albatross/react-i18n'
import { Modal, ModalHeader, ModalContent } from '@albatross/react-ui-dialog'

import { ProductListTable } from '@/components'
import { ProductTypes } from '@/models'
import { ModalContentStyled, BottomLine } from './styles'
import { ProductListTableAcquirer } from '../ProductListTableAcquirer'

interface IModalSelectProduct {
  show: boolean
  productType: ProductTypes
  handleShowModal: (show: boolean) => void
  handleSelectProduct: (productId: string) => void
}

const renderTabs = (
  currentTab: ProductTypes,
  handleClickTab: React.Dispatch<React.SetStateAction<ProductTypes>>
) => {
  const tabsList = [
    { tabName: ProductTypes.Terminal, tabLabel: 'Terminal' },
    { tabName: ProductTypes.Acquirer, tabLabel: 'Acquirer' },
    { tabName: ProductTypes.Service, tabLabel: 'Service' },
    { tabName: ProductTypes.Payments, tabLabel: 'Pagos Instantáneos' },
  ]
  return (
    <>
      {tabsList.map(({ tabLabel, tabName }) => (
        <Tabs
          key={`${tabName}Tab`}
          active={currentTab === tabName}
          onClick={() => handleClickTab(tabName)}
        >
          {t(tabLabel)}
        </Tabs>
      ))}
    </>
  )
}

export const ModalSelectProduct: FC<IModalSelectProduct> = ({
  show,
  productType,
  handleShowModal,
  handleSelectProduct,
}) => {
  const [currentTab, setCurrentTab] = useState(productType)

  const handleSelectProductAndCloseModal = useCallback(
    async (productId: string) => {
      handleSelectProduct(productId)
      handleShowModal(false)
    },
    [handleSelectProduct, handleShowModal]
  )

  return (
    <Modal isVisible={show} onClose={() => handleShowModal(false)}>
      <ModalHeader onClose={() => handleShowModal(false)}>
        {/* <h2>{t('Select products')}</h2>
        <p>{t('Add as many as desired.')}</p> */}
      </ModalHeader>
      <ModalContentStyled>
        <ModalContent>
          <BottomLine>{renderTabs(currentTab, setCurrentTab)}</BottomLine>
          {/* <ProductListTable
            currentTitle={currentTab}
            saveProductSelection={({ id }) =>
              handleSelectProductAndCloseModal(String(id))
            }
          /> */}
          <ProductListTableAcquirer
            currentTitle={currentTab}
            saveProductSelection={({ id }) =>
              handleSelectProductAndCloseModal(String(id))
            }
          />
        </ModalContent>
      </ModalContentStyled>
    </Modal>
  )
}
