import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import {
    CopyCell,
    ITableColumn,
    IToolbarFilter,
    PageBody,
    PageHeader,
    PageLayout,
    PageTable,
    SinceCell,
    TextCell,
} from '../../../framework'
import { pulpHRefKeyFn } from '../useHubView'
import { usePulpView } from '../usePulpView'
import { SignatureKey } from './SignatureKey'

export function SignatureKeys() {
    const { t } = useTranslation()
    const toolbarFilters = useSignatureKeyFilters()
    const tableColumns = useSignatureKeysColumns()
    const view = usePulpView<SignatureKey>('/api/automation-hub/pulp/api/v3/signing-services/', pulpHRefKeyFn, toolbarFilters, tableColumns)
    return (
        <PageLayout>
            <PageHeader title={t('SignatureKeys')} />
            <PageBody>
                <PageTable<SignatureKey>
                    toolbarFilters={toolbarFilters}
                    tableColumns={tableColumns}
                    errorStateTitle={t('Error loading signature keys')}
                    emptyStateTitle={t('No signature keys yet')}
                    {...view}
                />
            </PageBody>
        </PageLayout>
    )
}

export function useSignatureKeysColumns(_options?: { disableSort?: boolean; disableLinks?: boolean }) {
    const { t } = useTranslation()
    const tableColumns = useMemo<ITableColumn<SignatureKey>[]>(
        () => [
            { header: t('Name'), cell: (signatureKey) => <TextCell text={signatureKey.name} /> },
            { header: t('Fingerprint'), cell: (signatureKey) => <CopyCell text={signatureKey.pubkey_fingerprint} /> },
            { header: t('Created'), cell: (signatureKey) => <SinceCell value={signatureKey.pulp_created} /> },
            { header: t('Public key'), cell: (signatureKey) => <CopyCell text={signatureKey.public_key} /> },
        ],
        [t]
    )
    return tableColumns
}

export function useSignatureKeyFilters() {
    const { t } = useTranslation()
    const toolbarFilters = useMemo<IToolbarFilter[]>(() => [{ key: 'name', label: t('Name'), type: 'string', query: 'name' }], [t])
    return toolbarFilters
}