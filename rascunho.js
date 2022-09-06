const handleShowModal = useCallback(
  async (show: boolean) => {
    const productAcquirer = (await getProducts()).data
    const listProducts = productAcquirer?.products
    const result = listProducts?.map(
      ({ name, owner, productConfiguration }) => {
        return {
          name,
          owner,
          acquirerProductType: productConfiguration?.acquirerProductType,
          transactionChannelType:
            productConfiguration?.transactionChannelType,
          paymentModel: productConfiguration?.paymentModel,
          brand: productConfiguration?.brand,
          installmentType: productConfiguration?.installmentType,
          installmentsSchema: productConfiguration?.installmentsSchema,
        }
      }
    )
    setProducts(result)
    setModalState((oldState) => ({ ...oldState, show }))
    setIsModal(show)
  },
  [getProducts, setIsModal, setProducts]
)






import { ProductListTable } from '@/components'
import { ProductTypes } from '@/models'
import { ProductListTableAcquirer } from '../ProductListTableAcquirer'
import { BottomLine, ModalContentStyled } from './styles'

interface IModalSelectProduct {
  show: boolean
  productType: ProductTypes
  handleShowModal: (show: boolean, productId?: string) => void
  handleSelectProduct: (productId: string) => void
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
  const labels = {
    terminal: 'Terminal',
    acquirer: 'Acquirer',
    payments: 'Pagos Instantáneos',
    service: 'Service',
  }

  return (
    <Modal isVisible={show} onClose={() => handleShowModal(false)}>
      <ModalHeader onClose={() => handleShowModal(false)}>
        {/* <h2>{t('Select products')}</h2> */}
        {/* <p>{t('Add as many as desired.')}</p> */}
      </ModalHeader>
      <ModalContentStyled>
        <ModalContent>
          {/* <BottomLine>{renderTabs(currentTab, setCurrentTab)}</BottomLine> */}
          {/* <ProductListTable
            currentTitle={currentTab}
            saveProductSelection={({ id }) =>
              handleSelectProductAndCloseModal(String(id))
            }
          /> */}
          <BottomLine>
            <Tabs active={true}>{t(labels[productType])}</Tabs>
          </BottomLine>
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

