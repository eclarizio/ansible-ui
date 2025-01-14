import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PageHeader, PageLayout, PageTable } from '../../../../framework';
import { RouteObj } from '../../../Routes';
import { EdaUser } from '../../interfaces/EdaUser';
import { useUserActions } from './hooks/useUserActions';
import { useUserColumns } from './hooks/useUserColumns';
import { useUserFilters } from './hooks/useUserFilters';
import { useUsersActions } from './hooks/useUsersActions';
import { API_PREFIX } from '../../constants';
import { useEdaView } from '../../useEventDrivenView';

export function Users() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const toolbarFilters = useUserFilters();
  const tableColumns = useUserColumns();
  const view = useEdaView<EdaUser>({
    url: `${API_PREFIX}/users/`,
    toolbarFilters,
    tableColumns,
  });
  const toolbarActions = useUsersActions(view);
  const rowActions = useUserActions(view);
  return (
    <PageLayout>
      <PageHeader title={t('Users')} />
      <PageTable
        tableColumns={tableColumns}
        toolbarActions={toolbarActions}
        toolbarFilters={toolbarFilters}
        rowActions={rowActions}
        errorStateTitle={t('Error loading users')}
        emptyStateTitle={t('No users yet')}
        emptyStateDescription={t('To get started, create a user.')}
        emptyStateButtonText={t('Create user')}
        emptyStateButtonClick={() => navigate(RouteObj.CreateEdaUser)}
        {...view}
        defaultSubtitle={t('User')}
      />
    </PageLayout>
  );
}
