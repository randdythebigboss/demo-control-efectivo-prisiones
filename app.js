/* ═══════════════════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════════════════ */
const translations = {
  es: {
    /* Brand */
    'brand.name': 'Control de Efectivo',
    'brand.sub':  'Dir. General de Prisiones',

    /* Topbar */
    'topbar.system': 'DGP \u2014 Control de Efectivo',
    'user.role': 'Administradora',

    /* Navigation */
    'nav.dashboard':   'Dashboard',
    'nav.admin':       'Administraci\u00f3n',
    'nav.admin.prisonCenters': 'Centros Penitenciarios',
    'nav.admin.provinces':    'Provincias',
    'nav.admin.accountTypes': 'Tipos de Cuenta',
    'nav.admin.users':        'Usuarios y Roles',
    'nav.inmates':              'Gesti\u00f3n de Reclusos',
    'nav.inmates.registration': 'Registro de Reclusos',
    'nav.inmates.accounts':     'Apertura de Cuentas',
    'nav.inmates.balance':      'Consulta de Saldo',
    'nav.inmates.history':      'Historial de Transacciones',
    'nav.transactions':           'Transacciones',
    'nav.transactions.deposits':  'Dep\u00f3sitos',
    'nav.transactions.withdrawals':'Retiros',
    'nav.transactions.reversal':  'Reverso de Transacci\u00f3n',
    'nav.cashdesk':               'Control de Caja',
    'nav.cashdesk.opening':       'Apertura de Caja',
    'nav.cashdesk.closing':       'Cierre de Caja',
    'nav.cashdesk.reconciliation':'Arqueo y Conciliaci\u00f3n',
    'nav.special':          'Procesos Especiales',
    'nav.special.transfer': 'Traslado de Recluso',
    'nav.special.release':  'Excarcelaci\u00f3n',
    'nav.special.family':   'Entrega a Familiares',
    'nav.security':             'Seguridad y Auditor\u00eda',
    'nav.security.accessLog':   'Registro de Accesos',
    'nav.security.audit':       'Auditor\u00eda de Operaciones',
    'nav.security.roles':       'Roles y Permisos',
    'nav.reports': 'Reportes',

    /* Dashboard */
    'dashboard.title':    'Panel de Control',
    'dashboard.subtitle': 'Resumen operativo del d\u00eda \u2014 Sistema de Control de Efectivo Penitenciario',
    'dashboard.kpi.inmates':         'Reclusos Registrados',
    'dashboard.kpi.activeAccounts':  'Cuentas Activas',
    'dashboard.kpi.todayDeposits':   'Dep\u00f3sitos del D\u00eda',
    'dashboard.kpi.todayWithdrawals':'Retiros del D\u00eda',
    'dashboard.kpi.openCashDesks':   'Cajas Abiertas',
    'dashboard.kpi.auditAlerts':     'Alertas de Auditor\u00eda',
    'dashboard.kpi.thisMonth':   'este mes',
    'dashboard.kpi.today':       'hoy',
    'dashboard.kpi.vsYesterday': 'vs ayer',
    'dashboard.kpi.of':          'de',
    'dashboard.kpi.centers':     'centros',
    'dashboard.kpi.requireReview':'Requieren revisi\u00f3n',
    'dashboard.recentTransactions': 'Transacciones Recientes',
    'dashboard.last24h':            '\u00daltimas 24h',
    'dashboard.cashDeskStatus':     'Estado de Cajas',
    'dashboard.auditAlerts':        'Alertas de Auditor\u00eda',

    /* Table headers */
    'table.ref':        'Ref.',
    'table.inmate':     'Recluso',
    'table.center':     'Centro',
    'table.type':       'Tipo',
    'table.amount':     'Monto',
    'table.status':     'Estado',
    'table.time':       'Hora',
    'table.date':       'Fecha',
    'table.datetime':   'Fecha/Hora',
    'table.name':       'Nombre',
    'table.province':   'Provincia',
    'table.region':     'Regi\u00f3n',
    'table.capacity':   'Capacidad',
    'table.inmates':    'Reclusos',
    'table.actions':    'Acciones',
    'table.centers':    'Centros',
    'table.description':'Descripci\u00f3n',
    'table.monthlyLimit':'L\u00edmite Mensual',
    'table.user':       'Usuario',
    'table.fullName':   'Nombre',
    'table.role':       'Rol',
    'table.lastAccess': '\u00daltimo Acceso',
    'table.code':       'C\u00f3digo',
    'table.id':         'C\u00e9dula',
    'table.cell':       'Celda',
    'table.entryDate':  'Ingreso',
    'table.balance':    'Saldo',
    'table.operator':   'Operador',
    'table.ip':         'IP',
    'table.action':     'Acci\u00f3n',
    'table.result':     'Resultado',
    'table.operation':  'Operaci\u00f3n',

    /* Status */
    'status.active':      'Activo',
    'status.inactive':    'Inactivo',
    'status.maintenance': 'Mantenimiento',
    'status.completed':   'Completado',
    'status.pending':     'Pendiente',
    'status.suspended':   'Suspendido',
    'status.closed':      'Cerrado',
    'status.success':     'Exitoso',
    'status.failed':      'Fallido',
    'status.flagged':     'Marcado',

    /* Centers */
    'center.laVictoria': 'La Victoria',
    'center.najayo':     'Najayo',
    'center.rafeyH':     'Rafey Hombres',
    'center.higuey':     'Hig\u00fcey',

    /* Transaction types */
    'txn.deposit':    'Dep\u00f3sito',
    'txn.withdrawal': 'Retiro',
    'txn.transfer':   'Traslado',
    'txn.reversal':   'Reverso',

    /* Roles */
    'role.admin':    'Administrador',
    'role.operator': 'Operador',
    'role.auditor':  'Auditor',

    /* Scope */
    'scope.national': 'Nacional',

    /* Account types */
    'acct.standard':      'Est\u00e1ndar',
    'acct.standard.desc': 'Cuenta b\u00e1sica para reclusos procesados',
    'acct.trusted':       'Confianza',
    'acct.trusted.desc':  'Reclusos con conducta ejemplar',
    'acct.restricted':    'Restringida',
    'acct.restricted.desc':'Reclusos en r\u00e9gimen disciplinario',
    'acct.transit':       'Tr\u00e1nsito',
    'acct.transit.desc':  'Reclusos en traslado temporal',

    /* Buttons */
    'btn.addNew':            '+ Agregar',
    'btn.addUser':           '+ Agregar Usuario',
    'btn.register':          '+ Registrar',
    'btn.addRole':           '+ Nuevo Rol',
    'btn.edit':              'Editar',
    'btn.view':              'Ver',
    'btn.search':            'Buscar',
    'btn.cancel':            'Cancelar',
    'btn.generate':          'Generar',
    'btn.openAccount':       'Abrir Cuenta',
    'btn.confirmDeposit':    'Confirmar Dep\u00f3sito',
    'btn.confirmWithdrawal': 'Confirmar Retiro',
    'btn.processReversal':   'Procesar Reverso',
    'btn.openCashDesk':      'Abrir Caja',
    'btn.closeCashDesk':     'Cerrar Caja',
    'btn.processTransfer':   'Procesar Traslado',
    'btn.processRelease':    'Procesar Excarcelaci\u00f3n',
    'btn.processDelivery':   'Procesar Entrega',

    /* Search placeholders */
    'search.placeholder': 'Buscar...',
    'search.inmate':      'C\u00e9dula, nombre o c\u00f3digo...',
    'search.user':        'Filtrar por usuario...',

    /* Filters */
    'filter.allProvinces': 'Todas las provincias',
    'filter.allOperations':'Todas las operaciones',

    /* Forms */
    'form.accountOpening':  'Nueva Apertura de Cuenta',
    'form.inmateCode':      'C\u00f3digo de Recluso',
    'form.fullName':        'Nombre Completo',
    'form.accountType':     'Tipo de Cuenta',
    'form.center':          'Centro Penitenciario',
    'form.initialBalance':  'Saldo Inicial (RD$)',
    'form.openDate':        'Fecha de Apertura',
    'form.deposit':         'Registrar Dep\u00f3sito',
    'form.depositor':       'Depositante',
    'form.amount':          'Monto (RD$)',
    'form.reference':       'Referencia',
    'form.notes':           'Notas',
    'form.withdrawal':      'Registrar Retiro',
    'form.reason':          'Motivo',
    'form.authorizedBy':    'Autorizado por',
    'form.transactionRef':  'Referencia de Transacci\u00f3n',
    'form.supervisorAuth':  'C\u00f3digo de Autorizaci\u00f3n',
    'form.cashOpenTitle':   'Apertura de Sesi\u00f3n de Caja',
    'form.cashCloseTitle':  'Cierre de Sesi\u00f3n de Caja',
    'form.operator':        'Operador',
    'form.openingBalance':  'Fondo Inicial (RD$)',
    'form.openDatetime':    'Fecha/Hora Apertura',
    'form.physicalCount':   'Conteo F\u00edsico (RD$)',
    'form.originCenter':    'Centro de Origen',
    'form.destinationCenter':'Centro de Destino',
    'form.transferDate':    'Fecha de Traslado',
    'form.courtOrder':      'N\u00ba de Orden Judicial',
    'form.releaseDate':     'Fecha de Excarcelaci\u00f3n',
    'form.deliveredTo':     'Entregado a',
    'form.deliveredId':     'C\u00e9dula del Receptor',
    'form.recipientName':   'Nombre del Familiar',
    'form.recipientId':     'C\u00e9dula del Familiar',
    'form.relationship':    'Parentesco',
    'form.deliveryDate':    'Fecha de Entrega',

    /* Balance */
    'balance.available':   'Saldo Disponible',
    'balance.accountType': 'Tipo de Cuenta',
    'balance.monthlyLimit':'L\u00edmite Mensual',
    'balance.monthlyUsed': 'Usado este mes',
    'balance.status':      'Estado de Cuenta',

    /* Summary */
    'summary.openingBalance':  'Fondo Inicial',
    'summary.totalDeposits':   'Total Dep\u00f3sitos',
    'summary.totalWithdrawals':'Total Retiros',
    'summary.expectedBalance': 'Saldo Esperado',

    /* Reconciliation */
    'recon.expected': 'Saldo Esperado',
    'recon.physical': 'Conteo F\u00edsico',
    'recon.difference':'Diferencia',
    'recon.result':   'Resultado',
    'recon.balanced': '\u2713 Cuadrado',

    /* Alerts */
    'alert.unusualAmount':   'Monto inusual',
    'alert.failedLogin':     'Acceso fallido',
    'alert.reversalPending': 'Reverso pendiente',
    'alert.reversalWarning': 'El reverso requiere autorizaci\u00f3n de supervisor y queda registrado en el log de auditor\u00eda.',
    'alert.releaseWarning':  'Al excarcelar, el saldo total debe ser entregado. Esta operaci\u00f3n es irreversible.',
    'alert.transferInfo':    'El traslado transfiere el saldo al centro destino. La cuenta en el centro de origen se cierra autom\u00e1ticamente.',

    /* Access log */
    'access.login': 'Inicio de sesi\u00f3n',

    /* Permissions */
    'perm.allModules':  'Todos los m\u00f3dulos',
    'perm.userMgmt':    'Gesti\u00f3n de usuarios',
    'perm.auditView':   'Vista de auditor\u00eda',
    'perm.reversal':    'Autorizar reversos',
    'perm.reports':     'Reportes',
    'perm.deposits':    'Dep\u00f3sitos',
    'perm.withdrawals': 'Retiros',
    'perm.balanceQuery':'Consulta de saldo',
    'perm.accessLog':   'Registro de accesos',

    /* Reasons */
    'reason.personal': 'Gastos personales',
    'reason.medical':  'Atenci\u00f3n m\u00e9dica',
    'reason.legal':    'Gastos legales',

    /* Relationships */
    'rel.spouse':  'C\u00f3nyuge',
    'rel.parent':  'Padre/Madre',
    'rel.child':   'Hijo/Hija',
    'rel.sibling': 'Hermano/Hermana',
    'rel.other':   'Otro',

    /* Reports */
    'report.dailyMovements':      'Movimientos Diarios',
    'report.dailyMovements.desc': 'Resumen de transacciones por d\u00eda y centro',
    'report.balanceReport':       'Reporte de Saldos',
    'report.balanceReport.desc':  'Saldos actuales por centro y tipo de cuenta',
    'report.cashDeskReport':      'Resumen de Cajas',
    'report.cashDeskReport.desc': 'Aperturas, cierres y arqueos por per\u00edodo',
    'report.auditReport':         'Reporte de Auditor\u00eda',
    'report.auditReport.desc':    'Operaciones marcadas y accesos sospechosos',
    'report.inmateReport':        'Reclusos y Cuentas',
    'report.inmateReport.desc':   'Listado de reclusos con estado de cuenta',
    'report.specialProcesses':      'Procesos Especiales',
    'report.specialProcesses.desc': 'Traslados, excarcelaciones y entregas a familiares',

    /* Block 2 additions */
    'detail.inmateProfile':   'Perfil del Recluso',
    'detail.biometric':       'Huella Digital',
    'detail.biometricYes':    'Registrada &#10003;',
    'detail.sentenceEnd':     'Vence Sentencia',
    'detail.recentActivity':  'Actividad Reciente',
    'detail.txnDetail':       'Detalle de Transacci\u00f3n',
    'detail.userProfile':     'Perfil de Usuario',
    'detail.flaggedDetail':   'Operaci\u00f3n Marcada',
    'detail.authCode':        'C\u00f3digo de Auth',
    'detail.auditHash':       'Hash de Auditor\u00eda',
    'detail.flagReason':      'Raz\u00f3n de Marca',
    'detail.pendingAction':   'Acci\u00f3n Pendiente',
    'cashdesk.activeSessions':'Sesiones Activas Hoy',
    'cashdesk.centersWithout':'Centros sin Apertura',
    'cashdesk.totalFunds':    'Fondos Iniciales Totales',
    'cashdesk.lastMovements': '\u00daltimos Movimientos',
    'cashdesk.sessions':      'Sesiones del D\u00eda',
    'recon.discrepancy':      '\u26a0 Discrepancia detectada \u2014 requiere revisi\u00f3n del supervisor',
    'security.todayLogins':   'Accesos Hoy',
    'security.failedAttempts':'Intentos Fallidos',
    'security.activeSessions':'Sesiones Activas',
    'security.flaggedOps':    'Operaciones Marcadas',
    'security.pendingReversals':'Reversos Pendientes',
    'security.totalAudited':  'Total Auditado Hoy',
    'security.biometric':     'Verificaci\u00f3n Biom\u00e9trica',
    'security.policy':        'Pol\u00edtica de Seguridad',
    'report.filter.dateFrom': 'Desde',
    'report.filter.dateTo':   'Hasta',
    'report.filter.center':   'Centro',
    'report.preview':         'Vista Previa del Reporte',
    'report.chart':           'Volumen por Centro (Marzo 2026)',
    'report.totalTxns':       'Total Transacciones',
    'report.totalVolume':     'Volumen Total',
    'report.avgTxn':          'Promedio por Transacci\u00f3n',
    'report.pendingRecon':    'Conciliaciones Pendientes',
    'report.export.pdf':      'Exportar PDF',
    'report.export.excel':    'Exportar Excel',
    'special.inmateSnapshot':  'Datos del Recluso',
    'special.currentBalance':  'Saldo Actual',
    'special.availableBalance':'Saldo Disponible',
    'special.confirmSummary':  'Resumen de la Operaci\u00f3n',
    'special.approvals':       'Autorizaciones Requeridas',
    'special.releaseReceipt':  'Recibo de Excarcelaci\u00f3n',
    'special.deliveryConfirm': 'Confirmaci\u00f3n de Entrega',
    'special.deliveryAmount':  'Monto Entregado',
    'special.remainingBalance':'Saldo Restante',
    'approval.directorSig':    'Firma del Director',
    'approval.legalDept':      'Dpto. Legal',
    'approval.biometric':      'Verificaci\u00f3n Biom\u00e9trica',
    'approval.receiverPresent':'Receptor presente en ventanilla',
    'approval.idVerified':     'Identidad del familiar verificada',
    'approval.supervisorAuth': 'Autorizaci\u00f3n de supervisor',
    'approval.receiverSig':    'Firma de recibido del familiar',
    'access.logout':           'Cierre de sesi\u00f3n',
    'audit.hashLabel':         'Hash de integridad:',
    'flag.unusualAmount':      'Monto inusual \u2014 supera umbral',
    'btn.escalate':            'Escalar a Supervisor',
    'scanner.laVictoria':      'La Victoria \u2014 Esc\u00e1ner A1',
    'scanner.najayo':          'Najayo \u2014 Esc\u00e1ner B2',
    'scanner.rafey':           'Rafey Hombres \u2014 Esc\u00e1ner C1',
    'scanner.higuey':          'Hig\u00fcey \u2014 Esc\u00e1ner D1',
    'report.filter.type':      'Tipo de Reporte',
    'state.success':           'Operaci\u00f3n registrada exitosamente (modo demo)',
    'btn.exportPdf':          'Exportar PDF',
    'btn.exportExcel':        'Exportar Excel',
    'scanner.online':         'En l\u00ednea',
    'scanner.offline':        'Sin conexi\u00f3n',
    'policy.sessionTimeout':  'Tiempo de sesi\u00f3n: 30 minutos',
    'policy.maxAttempts':     'M\u00e1x. intentos fallidos: 3',
    'policy.password':        'Contrase\u00f1a: m\u00edn. 8 car. mixtos',
    'policy.auditAll':        'Auditor\u00eda: todas las operaciones',
    'table.openTime':         'Hora Apertura',
    'table.initialFund':      'Fondo Inicial',
    'table.session':          'Sesi\u00f3n',
    'table.flagReason':       'Raz\u00f3n',
    'table.module':           'M\u00f3dulo',
    'table.sentence':         'Sentencia',
    'table.entryDate2':       'Ingreso',
  },

  en: {
    /* Brand */
    'brand.name': 'Cash Control System',
    'brand.sub':  'General Directorate of Prisons',

    /* Topbar */
    'topbar.system': 'DGP \u2014 Cash Control System',
    'user.role': 'Administrator',

    /* Navigation */
    'nav.dashboard':   'Dashboard',
    'nav.admin':       'Administration',
    'nav.admin.prisonCenters': 'Prison Centers',
    'nav.admin.provinces':    'Provinces',
    'nav.admin.accountTypes': 'Account Types',
    'nav.admin.users':        'Users & Roles',
    'nav.inmates':              'Inmate Management',
    'nav.inmates.registration': 'Inmate Registration',
    'nav.inmates.accounts':     'Account Opening',
    'nav.inmates.balance':      'Balance Inquiry',
    'nav.inmates.history':      'Transaction History',
    'nav.transactions':           'Transactions',
    'nav.transactions.deposits':  'Deposits',
    'nav.transactions.withdrawals':'Withdrawals',
    'nav.transactions.reversal':  'Transaction Reversal',
    'nav.cashdesk':               'Cash Desk Control',
    'nav.cashdesk.opening':       'Cash Desk Opening',
    'nav.cashdesk.closing':       'Cash Desk Closing',
    'nav.cashdesk.reconciliation':'Cash Count / Reconciliation',
    'nav.special':          'Special Processes',
    'nav.special.transfer': 'Inmate Transfer',
    'nav.special.release':  'Inmate Release',
    'nav.special.family':   'Delivery to Family Members',
    'nav.security':             'Security & Audit',
    'nav.security.accessLog':   'Access Log',
    'nav.security.audit':       'Operations Audit',
    'nav.security.roles':       'Roles & Permissions',
    'nav.reports': 'Reports',

    /* Dashboard */
    'dashboard.title':    'Control Panel',
    'dashboard.subtitle': 'Daily operational summary \u2014 Prison Cash Control System',
    'dashboard.kpi.inmates':         'Registered Inmates',
    'dashboard.kpi.activeAccounts':  'Active Accounts',
    'dashboard.kpi.todayDeposits':   "Today's Deposits",
    'dashboard.kpi.todayWithdrawals':"Today's Withdrawals",
    'dashboard.kpi.openCashDesks':   'Open Cash Desks',
    'dashboard.kpi.auditAlerts':     'Audit Alerts',
    'dashboard.kpi.thisMonth':   'this month',
    'dashboard.kpi.today':       'today',
    'dashboard.kpi.vsYesterday': 'vs yesterday',
    'dashboard.kpi.of':          'of',
    'dashboard.kpi.centers':     'centers',
    'dashboard.kpi.requireReview':'Require review',
    'dashboard.recentTransactions': 'Recent Transactions',
    'dashboard.last24h':            'Last 24h',
    'dashboard.cashDeskStatus':     'Cash Desk Status',
    'dashboard.auditAlerts':        'Audit Alerts',

    /* Table headers */
    'table.ref':        'Ref.',
    'table.inmate':     'Inmate',
    'table.center':     'Center',
    'table.type':       'Type',
    'table.amount':     'Amount',
    'table.status':     'Status',
    'table.time':       'Time',
    'table.date':       'Date',
    'table.datetime':   'Date/Time',
    'table.name':       'Name',
    'table.province':   'Province',
    'table.region':     'Region',
    'table.capacity':   'Capacity',
    'table.inmates':    'Inmates',
    'table.actions':    'Actions',
    'table.centers':    'Centers',
    'table.description':'Description',
    'table.monthlyLimit':'Monthly Limit',
    'table.user':       'User',
    'table.fullName':   'Full Name',
    'table.role':       'Role',
    'table.lastAccess': 'Last Access',
    'table.code':       'Code',
    'table.id':         'National ID',
    'table.cell':       'Cell',
    'table.entryDate':  'Entry Date',
    'table.balance':    'Balance',
    'table.operator':   'Operator',
    'table.ip':         'IP',
    'table.action':     'Action',
    'table.result':     'Result',
    'table.operation':  'Operation',

    /* Status */
    'status.active':      'Active',
    'status.inactive':    'Inactive',
    'status.maintenance': 'Maintenance',
    'status.completed':   'Completed',
    'status.pending':     'Pending',
    'status.suspended':   'Suspended',
    'status.closed':      'Closed',
    'status.success':     'Success',
    'status.failed':      'Failed',
    'status.flagged':     'Flagged',

    /* Centers */
    'center.laVictoria': 'La Victoria',
    'center.najayo':     'Najayo',
    'center.rafeyH':     'Rafey (Men)',
    'center.higuey':     'Hig\u00fcey',

    /* Transaction types */
    'txn.deposit':    'Deposit',
    'txn.withdrawal': 'Withdrawal',
    'txn.transfer':   'Transfer',
    'txn.reversal':   'Reversal',

    /* Roles */
    'role.admin':    'Administrator',
    'role.operator': 'Operator',
    'role.auditor':  'Auditor',

    /* Scope */
    'scope.national': 'National',

    /* Account types */
    'acct.standard':      'Standard',
    'acct.standard.desc': 'Basic account for processed inmates',
    'acct.trusted':       'Trusted',
    'acct.trusted.desc':  'Inmates with exemplary conduct',
    'acct.restricted':    'Restricted',
    'acct.restricted.desc':'Inmates under disciplinary regime',
    'acct.transit':       'Transit',
    'acct.transit.desc':  'Inmates in temporary transfer',

    /* Buttons */
    'btn.addNew':            '+ Add New',
    'btn.addUser':           '+ Add User',
    'btn.register':          '+ Register',
    'btn.addRole':           '+ New Role',
    'btn.edit':              'Edit',
    'btn.view':              'View',
    'btn.search':            'Search',
    'btn.cancel':            'Cancel',
    'btn.generate':          'Generate',
    'btn.openAccount':       'Open Account',
    'btn.confirmDeposit':    'Confirm Deposit',
    'btn.confirmWithdrawal': 'Confirm Withdrawal',
    'btn.processReversal':   'Process Reversal',
    'btn.openCashDesk':      'Open Cash Desk',
    'btn.closeCashDesk':     'Close Cash Desk',
    'btn.processTransfer':   'Process Transfer',
    'btn.processRelease':    'Process Release',
    'btn.processDelivery':   'Process Delivery',

    /* Search placeholders */
    'search.placeholder': 'Search...',
    'search.inmate':      'ID, name or code...',
    'search.user':        'Filter by user...',

    /* Filters */
    'filter.allProvinces': 'All provinces',
    'filter.allOperations':'All operations',

    /* Forms */
    'form.accountOpening':  'New Account Opening',
    'form.inmateCode':      'Inmate Code',
    'form.fullName':        'Full Name',
    'form.accountType':     'Account Type',
    'form.center':          'Prison Center',
    'form.initialBalance':  'Initial Balance (RD$)',
    'form.openDate':        'Opening Date',
    'form.deposit':         'Register Deposit',
    'form.depositor':       'Depositor',
    'form.amount':          'Amount (RD$)',
    'form.reference':       'Reference',
    'form.notes':           'Notes',
    'form.withdrawal':      'Register Withdrawal',
    'form.reason':          'Reason',
    'form.authorizedBy':    'Authorized by',
    'form.transactionRef':  'Transaction Reference',
    'form.supervisorAuth':  'Supervisor Authorization Code',
    'form.cashOpenTitle':   'Cash Desk Session Opening',
    'form.cashCloseTitle':  'Cash Desk Session Closing',
    'form.operator':        'Operator',
    'form.openingBalance':  'Opening Balance (RD$)',
    'form.openDatetime':    'Opening Date/Time',
    'form.physicalCount':   'Physical Count (RD$)',
    'form.originCenter':    'Origin Center',
    'form.destinationCenter':'Destination Center',
    'form.transferDate':    'Transfer Date',
    'form.courtOrder':      'Court Order No.',
    'form.releaseDate':     'Release Date',
    'form.deliveredTo':     'Delivered to',
    'form.deliveredId':     'Recipient ID',
    'form.recipientName':   'Family Member Name',
    'form.recipientId':     'Family Member ID',
    'form.relationship':    'Relationship',
    'form.deliveryDate':    'Delivery Date',

    /* Balance */
    'balance.available':   'Available Balance',
    'balance.accountType': 'Account Type',
    'balance.monthlyLimit':'Monthly Limit',
    'balance.monthlyUsed': 'Used this month',
    'balance.status':      'Account Status',

    /* Summary */
    'summary.openingBalance':  'Opening Balance',
    'summary.totalDeposits':   'Total Deposits',
    'summary.totalWithdrawals':'Total Withdrawals',
    'summary.expectedBalance': 'Expected Balance',

    /* Reconciliation */
    'recon.expected': 'Expected Balance',
    'recon.physical': 'Physical Count',
    'recon.difference':'Difference',
    'recon.result':   'Result',
    'recon.balanced': '\u2713 Balanced',

    /* Alerts */
    'alert.unusualAmount':   'Unusual amount',
    'alert.failedLogin':     'Failed login attempt',
    'alert.reversalPending': 'Reversal pending authorization',
    'alert.reversalWarning': 'A reversal requires supervisor authorization and is logged in the audit trail.',
    'alert.releaseWarning':  'Upon release, the full account balance must be delivered. This operation is irreversible.',
    'alert.transferInfo':    'The transfer moves the balance to the destination center. The account at the origin center is automatically closed.',

    /* Access log */
    'access.login': 'Login',

    /* Permissions */
    'perm.allModules':  'All modules',
    'perm.userMgmt':    'User management',
    'perm.auditView':   'Audit view',
    'perm.reversal':    'Authorize reversals',
    'perm.reports':     'Reports',
    'perm.deposits':    'Deposits',
    'perm.withdrawals': 'Withdrawals',
    'perm.balanceQuery':'Balance inquiry',
    'perm.accessLog':   'Access log',

    /* Reasons */
    'reason.personal': 'Personal expenses',
    'reason.medical':  'Medical care',
    'reason.legal':    'Legal expenses',

    /* Relationships */
    'rel.spouse':  'Spouse',
    'rel.parent':  'Parent',
    'rel.child':   'Child',
    'rel.sibling': 'Sibling',
    'rel.other':   'Other',

    /* Reports */
    'report.dailyMovements':      'Daily Movements',
    'report.dailyMovements.desc': 'Transaction summary by day and center',
    'report.balanceReport':       'Balance Report',
    'report.balanceReport.desc':  'Current balances by center and account type',
    'report.cashDeskReport':      'Cash Desk Summary',
    'report.cashDeskReport.desc': 'Openings, closings and reconciliations by period',
    'report.auditReport':         'Audit Report',
    'report.auditReport.desc':    'Flagged operations and suspicious access',
    'report.inmateReport':        'Inmates & Accounts',
    'report.inmateReport.desc':   'Inmate list with account status',
    'report.specialProcesses':      'Special Processes',
    'report.specialProcesses.desc': 'Transfers, releases and family deliveries',

    /* Block 2 additions */
    'detail.inmateProfile':   'Inmate Profile',
    'detail.biometric':       'Fingerprint',
    'detail.biometricYes':    'Enrolled &#10003;',
    'detail.sentenceEnd':     'Sentence Ends',
    'detail.recentActivity':  'Recent Activity',
    'detail.txnDetail':       'Transaction Detail',
    'detail.userProfile':     'User Profile',
    'detail.flaggedDetail':   'Flagged Operation',
    'detail.authCode':        'Auth Code',
    'detail.auditHash':       'Audit Hash',
    'detail.flagReason':      'Flag Reason',
    'detail.pendingAction':   'Pending Action',
    'cashdesk.activeSessions':'Active Sessions Today',
    'cashdesk.centersWithout':'Centers Without Opening',
    'cashdesk.totalFunds':    'Total Initial Funds',
    'cashdesk.lastMovements': 'Last Movements',
    'cashdesk.sessions':      "Today's Sessions",
    'recon.discrepancy':      '\u26a0 Discrepancy detected \u2014 supervisor review required',
    'security.todayLogins':   "Today's Logins",
    'security.failedAttempts':'Failed Attempts',
    'security.activeSessions':'Active Sessions',
    'security.flaggedOps':    'Flagged Operations',
    'security.pendingReversals':'Pending Reversals',
    'security.totalAudited':  'Total Audited Today',
    'security.biometric':     'Biometric Verification',
    'security.policy':        'Security Policy',
    'report.filter.dateFrom': 'From',
    'report.filter.dateTo':   'To',
    'report.filter.center':   'Center',
    'report.preview':         'Report Preview',
    'report.chart':           'Volume by Center (March 2026)',
    'report.totalTxns':       'Total Transactions',
    'report.totalVolume':     'Total Volume',
    'report.avgTxn':          'Avg per Transaction',
    'report.pendingRecon':    'Pending Reconciliations',
    'report.export.pdf':      'Export PDF',
    'report.export.excel':    'Export Excel',
    'special.inmateSnapshot':  'Inmate Snapshot',
    'special.currentBalance':  'Current Balance',
    'special.availableBalance':'Available Balance',
    'special.confirmSummary':  'Operation Summary',
    'special.approvals':       'Required Approvals',
    'special.releaseReceipt':  'Release Receipt',
    'special.deliveryConfirm': 'Delivery Confirmation',
    'special.deliveryAmount':  'Amount Delivered',
    'special.remainingBalance':'Remaining Balance',
    'approval.directorSig':    "Director's Signature",
    'approval.legalDept':      'Legal Department',
    'approval.biometric':      'Biometric Verification',
    'approval.receiverPresent':'Receiver present at window',
    'approval.idVerified':     'Family member identity verified',
    'approval.supervisorAuth': 'Supervisor authorization',
    'approval.receiverSig':    'Family member signed receipt',
    'access.logout':           'Logout',
    'audit.hashLabel':         'Integrity hash:',
    'flag.unusualAmount':      'Unusual amount \u2014 exceeds threshold',
    'btn.escalate':            'Escalate to Supervisor',
    'scanner.laVictoria':      'La Victoria \u2014 Scanner A1',
    'scanner.najayo':          'Najayo \u2014 Scanner B2',
    'scanner.rafey':           'Rafey Men \u2014 Scanner C1',
    'scanner.higuey':          'Hig\u00fcey \u2014 Scanner D1',
    'report.filter.type':      'Report Type',
    'state.success':           'Operation recorded successfully (demo mode)',
    'btn.exportPdf':          'Export PDF',
    'btn.exportExcel':        'Export Excel',
    'scanner.online':         'Online',
    'scanner.offline':        'Offline',
    'policy.sessionTimeout':  'Session timeout: 30 minutes',
    'policy.maxAttempts':     'Max failed attempts: 3',
    'policy.password':        'Password: min 8 mixed chars',
    'policy.auditAll':        'Audit: all operations logged',
    'table.openTime':         'Open Time',
    'table.initialFund':      'Initial Fund',
    'table.session':          'Session',
    'table.flagReason':       'Reason',
    'table.module':           'Module',
    'table.sentence':         'Sentence',
    'table.entryDate2':       'Entry',
  }
};

/* ═══════════════════════════════════════════════════════════
   SECTION → BREADCRUMB LABEL MAP
═══════════════════════════════════════════════════════════ */
const sectionLabels = {
  'dashboard':                 'nav.dashboard',
  'admin-prison-centers':      'nav.admin.prisonCenters',
  'admin-provinces':           'nav.admin.provinces',
  'admin-account-types':       'nav.admin.accountTypes',
  'admin-users':               'nav.admin.users',
  'inmates-registration':      'nav.inmates.registration',
  'inmates-accounts':          'nav.inmates.accounts',
  'inmates-balance':           'nav.inmates.balance',
  'inmates-history':           'nav.inmates.history',
  'transactions-deposits':     'nav.transactions.deposits',
  'transactions-withdrawals':  'nav.transactions.withdrawals',
  'transactions-reversal':     'nav.transactions.reversal',
  'cashdesk-opening':          'nav.cashdesk.opening',
  'cashdesk-closing':          'nav.cashdesk.closing',
  'cashdesk-reconciliation':   'nav.cashdesk.reconciliation',
  'special-transfer':          'nav.special.transfer',
  'special-release':           'nav.special.release',
  'special-family':            'nav.special.family',
  'security-access-log':       'nav.security.accessLog',
  'security-audit':            'nav.security.audit',
  'security-roles':            'nav.security.roles',
  'reports':                   'nav.reports',
};

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */
let currentLang    = localStorage.getItem('lang') || 'es';
let currentSection = 'dashboard';

/* ═══════════════════════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════════════════════ */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations['es'][key]) || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  /* Update all data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val !== undefined) el.textContent = val;
  });

  /* Update placeholder attributes */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val !== undefined) el.placeholder = val;
  });

  /* Update language button states */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Re-render breadcrumb */
  updateBreadcrumb(currentSection);

  /* Re-render date */
  renderDate();
}

/* ═══════════════════════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════════════════════ */
function navigateTo(sectionId) {
  /* Hide all sections */
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));

  /* Show target */
  const target = document.getElementById('section-' + sectionId);
  if (target) target.classList.add('active');

  /* Update nav items */
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === sectionId);
  });

  /* Update nav sub-items */
  document.querySelectorAll('.nav-sub-item').forEach(el => {
    el.classList.toggle('active', el.dataset.section === sectionId);
  });

  /* Open parent group if needed */
  const activeSubItem = document.querySelector('.nav-sub-item.active');
  if (activeSubItem) {
    const groupItems = activeSubItem.closest('.nav-group-items');
    if (groupItems && !groupItems.classList.contains('open')) {
      openGroup(groupItems);
    }
  }

  currentSection = sectionId;
  updateBreadcrumb(sectionId);

  /* Close sidebar on mobile */
  if (window.innerWidth <= 900) {
    closeSidebar();
  }
}

function updateBreadcrumb(sectionId) {
  const el = document.getElementById('breadcrumbCurrent');
  if (!el) return;
  const key = sectionLabels[sectionId] || 'nav.dashboard';
  el.textContent = t(key);
}

/* ═══════════════════════════════════════════════════════════
   SIDEBAR GROUPS
═══════════════════════════════════════════════════════════ */
function openGroup(groupItemsEl) {
  groupItemsEl.classList.add('open');
  const toggle = document.querySelector('[data-group="' + groupItemsEl.id.replace('group-', '') + '"]');
  if (toggle) toggle.classList.add('open');
}

function toggleGroup(groupId) {
  const items = document.getElementById('group-' + groupId);
  const toggle = document.querySelector('[data-group="' + groupId + '"]');
  if (!items) return;
  const isOpen = items.classList.contains('open');
  items.classList.toggle('open', !isOpen);
  if (toggle) toggle.classList.toggle('open', !isOpen);
}

/* ═══════════════════════════════════════════════════════════
   SIDEBAR TOGGLE (mobile)
═══════════════════════════════════════════════════════════ */
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('visible');
}

/* ═══════════════════════════════════════════════════════════
   CLOCK
═══════════════════════════════════════════════════════════ */
function updateClock() {
  const el = document.getElementById('topbarClock');
  if (!el) return;
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  el.textContent = hh + ':' + mm + ':' + ss;
}

/* ═══════════════════════════════════════════════════════════
   DATE
═══════════════════════════════════════════════════════════ */
function renderDate() {
  const el = document.getElementById('pageDate');
  if (!el) return;
  const now = new Date(2026, 2, 27); /* demo date */
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const locale = currentLang === 'en' ? 'en-US' : 'es-DO';
  el.textContent = now.toLocaleDateString(locale, opts);
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {

  /* ── Sidebar overlay (mobile) ── */
  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebarOverlay';
  document.body.appendChild(overlay);
  overlay.addEventListener('click', closeSidebar);

  /* ── Sidebar toggle button ── */
  document.getElementById('sidebarToggle').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    const isMobile = window.innerWidth <= 900;
    if (isMobile) {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('visible', sidebar.classList.contains('open'));
    } else {
      sidebar.classList.toggle('collapsed');
      document.querySelector('.main-wrapper').classList.toggle('expanded');
    }
  });

  /* ── Nav items (top-level) ── */
  document.querySelectorAll('.nav-item[data-section]').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      navigateTo(this.dataset.section);
    });
  });

  /* ── Nav sub-items ── */
  document.querySelectorAll('.nav-sub-item[data-section]').forEach(el => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      navigateTo(this.dataset.section);
    });
  });

  /* ── Group toggles ── */
  document.querySelectorAll('.nav-group-toggle').forEach(btn => {
    btn.addEventListener('click', function () {
      toggleGroup(this.dataset.group);
    });
  });

  /* ── Language buttons ── */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      setLanguage(this.dataset.lang);
    });
  });

  /* ── Demo buttons (no real submission) ── */
  document.querySelectorAll('.btn-primary, .btn-danger, .btn-secondary').forEach(btn => {
    if (btn.classList.contains('lang-btn')) return;
    btn.addEventListener('click', function () {
      const label = this.textContent.trim();
      /* Only intercept submit-style actions */
      const submitKeywords = [
        'Confirmar','Procesar','Abrir','Cerrar','Generar','Registrar','Guardar','Exportar','Escalar','Archivar','Aplicar',
        'Confirm','Process','Open','Close','Generate','Register','Save','Export','Escalate','Archive','Apply'
      ];
      const dangerKeywords = ['Procesar Excarcelación','Escalar','Escalate','Process Release'];
      const isSubmit = submitKeywords.some(kw => label.startsWith(kw));
      if (!isSubmit) return;
      const isDanger = dangerKeywords.some(kw => label.includes(kw));
      showToast(label, isDanger ? 'warning' : 'success');
    });
  });

  /* ── Initial language & render ── */
  setLanguage(currentLang);
  navigateTo('dashboard');

  /* ── Clock ── */
  updateClock();
  setInterval(updateClock, 1000);
});

/* ═══════════════════════════════════════════════════════════
   TOAST NOTIFICATION (demo feedback)
═══════════════════════════════════════════════════════════ */
function showToast(actionLabel, type) {
  type = type || 'success';

  const configs = {
    success: { bg: '#1a2742', accent: '#1a56db', icon: '\u2713', title: currentLang === 'en' ? 'Action simulated' : 'Acci\u00f3n simulada' },
    warning: { bg: '#7c2d12', accent: '#f97316', icon: '\u26a0', title: currentLang === 'en' ? 'Requires confirmation' : 'Requiere confirmaci\u00f3n' },
  };
  const cfg = configs[type] || configs.success;

  let toast = document.getElementById('demoToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'demoToast';
    toast.style.cssText = [
      'position:fixed', 'bottom:28px', 'right:28px', 'z-index:9999',
      'padding:14px 18px',
      'border-radius:8px', 'font-size:13px', 'font-family:inherit',
      'box-shadow:0 4px 24px rgba(0,0,0,0.30)',
      'max-width:340px', 'line-height:1.4',
      'transition:opacity 350ms ease, transform 350ms ease',
      'display:flex', 'align-items:flex-start', 'gap:12px'
    ].join(';');
    document.body.appendChild(toast);
  }

  toast.style.background   = cfg.bg;
  toast.style.borderLeft   = '4px solid ' + cfg.accent;
  toast.style.color        = '#fff';
  toast.style.opacity      = '1';
  toast.style.transform    = 'translateY(0)';

  toast.innerHTML =
    '<span style="font-size:18px;flex-shrink:0;line-height:1">' + cfg.icon + '</span>' +
    '<span style="display:flex;flex-direction:column;gap:2px">' +
      '<span style="font-weight:700;font-size:13px">' + cfg.title + '</span>' +
      '<span style="font-size:12px;opacity:0.80">' + actionLabel + '</span>' +
    '</span>';

  clearTimeout(toast._timer);
  toast._timer = setTimeout(function () {
    toast.style.opacity   = '0';
    toast.style.transform = 'translateY(8px)';
  }, 3200);
}
