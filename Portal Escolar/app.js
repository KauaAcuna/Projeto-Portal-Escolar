

const USUARIOS = [
  { id: 1,  nome: "Ana Paula Silva",   email: "ana@email.com",    role: "pai",       avatar: "👩", filho: "Lucas Silva", turma: "Turma Girassol" },
  { id: 2,  nome: "Carlos Mendes",     email: "carlos@email.com", role: "pai",       avatar: "👨", filho: "Sofia Mendes", turma: "Turma Borboleta" },
  { id: 3,  nome: "Fernanda Lima",     email: "fe@email.com",     role: "pai",       avatar: "👩", filho: "Pedro Lima", turma: "Turma Estrelinha" },
  { id: 4,  nome: "Profa. Marta",      email: "marta@escola.com", role: "professora",avatar: "👩‍🏫", turma: "Turma Girassol" },
  { id: 5,  nome: "Profa. Juliana",    email: "ju@escola.com",    role: "professora",avatar: "👩‍🏫", turma: "Turma Borboleta" },
  { id: 6,  nome: "Profa. Renata",     email: "re@escola.com",    role: "professora",avatar: "👩‍🏫", turma: "Turma Estrelinha" },
  { id: 7,  nome: "Dir. Roberto Costa",email: "rob@escola.com",   role: "diretor",   avatar: "🧑‍💼" },
  { id: 8,  nome: "Coord. Patricia",   email: "pat@escola.com",   role: "diretor",   avatar: "👩‍💼" },
];

let MENSAGENS = [
  { id: 1, de: 1, para: 4, assunto: "Reunião de pais", corpo: "Boa tarde, Professora Marta! Gostaria de saber se haverá reunião este mês para discutir o desenvolvimento do Lucas. Fico à disposição para agendar um horário conveniente.", data: "06/04/2025 09:15", lida: false },
  { id: 2, de: 7, para: 1, assunto: "Aviso importante: Semana Cultural", corpo: "Prezada Ana Paula, informamos que na semana dos dias 14 a 18 de abril ocorrerá a nossa Semana Cultural. Pedimos que os alunos venham fantasiados de personagens históricos na sexta-feira.", data: "05/04/2025 14:30", lida: false },
  { id: 3, de: 4, para: 1, assunto: "Re: Progresso do Lucas", corpo: "Olá Ana! O Lucas está indo muito bem! Ele já reconhece todas as letras e está avançando na leitura. Vamos agendar uma conversa na próxima semana?", data: "04/04/2025 11:00", lida: true },
  { id: 4, de: 5, para: 2, assunto: "Atividade extra da Sofia", corpo: "Carlos, a Sofia se destacou hoje na atividade de artes! Anexo uma foto do trabalho dela. Ela tem um talento incrível para desenho. Parabéns pelos incentivos em casa!", data: "03/04/2025 16:45", lida: true },
  { id: 5, de: 2, para: 5, assunto: "Dúvida sobre horário", corpo: "Professora Juliana, bom dia! Gostaria de saber o horário de entrada na segunda-feira da semana do passeio. Precisamos nos organizar.", data: "02/04/2025 08:20", lida: true },
];

let AVISOS = [
  { id: 1, titulo: "🎉 Festa Junina — Confirmado!", corpo: "A Festa Junina deste ano será no dia 21 de junho, às 17h, no pátio da escola. Contamos com a presença de todos!", categoria: "evento", autor: "Dir. Roberto Costa", data: "06/04/2025", authorId: 7 },
  { id: 2, titulo: "🤝 Reunião de Pais — Turma Girassol", corpo: "Convidamos todos os pais e responsáveis da Turma Girassol para a reunião bimestral. Data: 15/04 às 19h na sala 03.", categoria: "reuniao", autor: "Profa. Marta", data: "04/04/2025", authorId: 4 },
  { id: 3, titulo: "📢 Cardápio de Abril atualizado", corpo: "Segue o cardápio atualizado do mês de abril. Lembramos que a escola trabalha com alimentação saudável e equilibrada.", categoria: "geral", autor: "Coord. Patricia", data: "01/04/2025", authorId: 8 },
  { id: 4, titulo: "🚨 Atenção: Portão fecha às 8h", corpo: "Informamos que a partir desta semana o portão será fechado pontualmente às 8h. Por favor, evitem atrasos.", categoria: "urgente", autor: "Dir. Roberto Costa", data: "03/04/2025", authorId: 7 },
];

let EVENTOS = [
  { id: 1, titulo: "Reunião — Turma Girassol", data: "2026-04-15", hora: "19:00", desc: "Reunião bimestral de pais" },
  { id: 2, titulo: "Semana Cultural", data: "2026-04-14", hora: "08:00", desc: "Fantasias de personagens históricos" },
  { id: 3, titulo: "Passeio ao Zoológico — Borboleta", data: "2026-04-22", hora: "07:30", desc: "Ônibus sai às 7h30 da escola" },
  { id: 4, titulo: "Festa Junina", data: "2026-06-21", hora: "17:00", desc: "No pátio da escola" },
  { id: 5, titulo: "Dia das Mães", data: "2026-05-10", hora: "09:00", desc: "Apresentação especial das crianças" },
];

const ALUNOS = [
  { id: 1, nome: "Lucas Silva",    turma: "Turma Girassol",   emoji: "😄", responsavel: "Ana Paula Silva",   obs: "Ótimo progresso na leitura" },
  { id: 2, nome: "Sofia Mendes",   turma: "Turma Borboleta",  emoji: "🌸", responsavel: "Carlos Mendes",     obs: "Talento especial em artes" },
  { id: 3, nome: "Pedro Lima",     turma: "Turma Estrelinha", emoji: "⭐", responsavel: "Fernanda Lima",     obs: "Muito participativo em aula" },
  { id: 4, nome: "Maria Oliveira", turma: "Turma Girassol",   emoji: "🦋", responsavel: "João Oliveira",     obs: "Evolução contínua em matemática" },
  { id: 5, nome: "Gabriel Rocha",  turma: "Turma Borboleta",  emoji: "🚀", responsavel: "Sônia Rocha",       obs: "Destaque em educação física" },
  { id: 6, nome: "Isabela Ferraz", turma: "Turma Estrelinha", emoji: "🌟", responsavel: "Ricardo Ferraz",    obs: "Excelente trabalho em grupo" },
];


let currentUser = null;
let currentRole = "pai";
let currentPage = "feed";
let calendarDate = new Date(2026, 3, 1); // Abril 2026
let selectedMsgId = null;


function selectRole(role, btn) {
  currentRole = role;
  document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function handleLogin() {
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const errorEl  = document.getElementById('loginError');

  if (!email || !password) {
    errorEl.textContent = "Preencha todos os campos.";
    errorEl.classList.remove('hidden');
    return;
  }

  if (password !== '123') {
    errorEl.textContent = "Senha incorreta. Use '123' para a demo.";
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');

  
  let user = USUARIOS.find(u => u.email === email);
  if (!user) {
    user = USUARIOS.find(u => u.role === currentRole);
  }

  if (!user) user = USUARIOS[0];

  currentUser = user;
  doLogin();
}

function doLogin() {
  document.getElementById('loginScreen').classList.remove('active');
  document.getElementById('appScreen').classList.add('active');

 
  document.getElementById('userName').textContent  = currentUser.nome;
  document.getElementById('userRoleLabel').textContent = getRoleLabel(currentUser.role);
  document.getElementById('userAvatar').textContent    = currentUser.avatar || '👤';
  document.getElementById('topbarAvatar').textContent  = currentUser.avatar || '👤';

 
  const navAlunos = document.getElementById('navAlunos');
  if (currentUser.role === 'pai') {
    navAlunos.style.display = 'none';
  } else {
    navAlunos.style.display = 'flex';
  }

  navigate('feed', document.querySelector('.nav-item'));
  updateBadges();
}

function handleLogout() {
  currentUser = null;
  document.getElementById('appScreen').classList.remove('active');
  document.getElementById('loginScreen').classList.add('active');
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function getRoleLabel(role) {
  const map = { pai: 'Pai / Mãe', professora: 'Professora', diretor: 'Direção' };
  return map[role] || role;
}


function navigate(page, btn) {
  currentPage = page;

 
  if (btn) {
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    btn.classList.add('active');
  }

  
  const titles = { feed: 'Início', mensagens: 'Mensagens', avisos: 'Avisos', agenda: 'Agenda', alunos: 'Alunos', contatos: 'Contatos' };
  document.getElementById('topbarTitle').textContent = titles[page] || page;

  closeSidebar();

  // Renderiza página
  const content = document.getElementById('mainContent');
  content.style.animation = 'none';
  content.offsetHeight; // reflow
  content.style.animation = '';

  switch (page) {
    case 'feed':      renderFeed(content); break;
    case 'mensagens': renderMensagens(content); break;
    case 'avisos':    renderAvisos(content); break;
    case 'agenda':    renderAgenda(content); break;
    case 'alunos':    renderAlunos(content); break;
    case 'contatos':  renderContatos(content); break;
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');

  let overlay = document.querySelector('.sidebar-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.onclick = closeSidebar;
    document.body.appendChild(overlay);
  }
  overlay.classList.toggle('active', sidebar.classList.contains('open'));
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  const overlay = document.querySelector('.sidebar-overlay');
  if (overlay) overlay.classList.remove('active');
}



function updateBadges() {
  const unread = MENSAGENS.filter(m => m.para === currentUser.id && !m.lida).length;
  const badge1 = document.getElementById('msgBadge');
  const badge2 = document.getElementById('topBadge');

  if (unread > 0) {
    badge1.textContent = unread;
    badge1.style.display = '';
    badge2.textContent = unread;
    badge2.style.display = '';
  } else {
    badge1.style.display = 'none';
    badge2.style.display = 'none';
  }
}



function renderFeed(el) {
  const unread  = MENSAGENS.filter(m => m.para === currentUser.id && !m.lida).length;
  const myAvisos= AVISOS.length;
  const nextEvt = getNextEvent();

  const isStaff = currentUser.role !== 'pai';

  el.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">Olá, <span>${currentUser.nome.split(' ')[0]}!</span> 👋</h2>
    </div>

    <div class="stats-grid">
      <div class="stat-card" onclick="navigate('mensagens', null)" style="cursor:pointer; border-left: 4px solid var(--primary);">
        <div class="stat-icon">✉️</div>
        <div class="stat-value" style="color: var(--primary)">${unread}</div>
        <div class="stat-label">Msg. não lidas</div>
      </div>
      <div class="stat-card" onclick="navigate('avisos', null)" style="cursor:pointer; border-left: 4px solid var(--purple);">
        <div class="stat-icon">📢</div>
        <div class="stat-value" style="color: var(--purple)">${myAvisos}</div>
        <div class="stat-label">Avisos</div>
      </div>
      <div class="stat-card" onclick="navigate('agenda', null)" style="cursor:pointer; border-left: 4px solid var(--secondary);">
        <div class="stat-icon">📅</div>
        <div class="stat-value" style="color: var(--secondary)">${EVENTOS.length}</div>
        <div class="stat-label">Eventos</div>
      </div>
      ${isStaff ? `
      <div class="stat-card" onclick="navigate('alunos', null)" style="cursor:pointer; border-left: 4px solid var(--green);">
        <div class="stat-icon">👧</div>
        <div class="stat-value" style="color: var(--green)">${ALUNOS.length}</div>
        <div class="stat-label">Alunos</div>
      </div>` : `
      <div class="stat-card" style="border-left: 4px solid var(--green);">
        <div class="stat-icon">🏫</div>
        <div class="stat-value" style="color: var(--green)">3</div>
        <div class="stat-label">Turmas</div>
      </div>`}
    </div>

    <div class="feed-grid">
      <div>
        <div class="feed-section-title">📢 Últimos Avisos</div>
        ${AVISOS.slice(0, 3).map(renderAvisoCard).join('')}
        <button class="btn-secondary mt-8" onclick="navigate('avisos', null)" style="width:100%;">
          Ver todos os avisos <i class="fas fa-arrow-right"></i>
        </button>
      </div>

      <div>
        <div class="feed-section-title">📅 Próximos Eventos</div>
        ${EVENTOS.slice(0, 4).map(renderEventoItem).join('')}

        ${nextEvt ? `
        <div class="card mt-8" style="background: linear-gradient(135deg, var(--primary) 0%, var(--orange) 100%); color: white; border: none;">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; opacity: 0.8; margin-bottom: 6px;">⏰ Próximo Evento</div>
          <div style="font-weight: 800; font-size: 17px; margin-bottom: 4px;">${nextEvt.titulo}</div>
          <div style="font-size: 13px; opacity: 0.9;">${formatDate(nextEvt.data)} às ${nextEvt.hora}</div>
        </div>` : ''}
      </div>
    </div>
  `;
}

function getNextEvent() {
  const now = new Date();
  return EVENTOS
    .filter(e => new Date(e.data) >= now)
    .sort((a, b) => new Date(a.data) - new Date(b.data))[0];
}


function renderMensagens(el) {
  const minhas = MENSAGENS.filter(m => m.para === currentUser.id || m.de === currentUser.id);

  el.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">📬 Mensagens</h2>
      <button class="btn-primary" onclick="openMsgModal()">
        <i class="fas fa-paper-plane"></i> Nova Mensagem
      </button>
    </div>

    ${minhas.length === 0 ? `
      <div class="empty-state">
        <div class="es-icon">📭</div>
        <h3>Nenhuma mensagem</h3>
        <p>Você ainda não tem mensagens. Envie a primeira!</p>
      </div>
    ` : `
      <div class="msg-list">
        ${minhas.map(renderMsgItem).join('')}
      </div>
    `}
  `;
}

function renderMsgItem(msg) {
  const sender = USUARIOS.find(u => u.id === msg.de);
  const isUnread = msg.para === currentUser.id && !msg.lida;

  return `
    <div class="msg-item ${isUnread ? 'unread' : ''}" onclick="openMsg(${msg.id})">
      <div class="msg-avatar" style="background: ${isUnread ? 'var(--primary)' : 'var(--accent)'};">
        ${sender ? sender.avatar : '👤'}
      </div>
      <div class="msg-info">
        <div class="msg-from">${sender ? sender.nome : 'Desconhecido'} ${msg.de === currentUser.id ? '<span style="font-size:10px;color:var(--text-muted);font-weight:400;">(você enviou)</span>' : ''}</div>
        <div class="msg-subject">${msg.assunto}</div>
        <div class="msg-preview">${msg.corpo.substring(0, 80)}...</div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px;">
        <div class="msg-time">${msg.data.split(' ')[0]}</div>
        ${isUnread ? '<div class="msg-dot"></div>' : ''}
      </div>
    </div>
  `;
}

function openMsg(id) {
  const msg = MENSAGENS.find(m => m.id === id);
  if (!msg) return;

  // Marcar como lida
  if (msg.para === currentUser.id) {
    msg.lida = true;
    updateBadges();
  }

  const sender   = USUARIOS.find(u => u.id === msg.de);
  const receiver = USUARIOS.find(u => u.id === msg.para);

  document.getElementById('mainContent').innerHTML = `
    <div class="page-header">
      <button class="btn-secondary" onclick="navigate('mensagens', null)">
        <i class="fas fa-arrow-left"></i> Voltar
      </button>
      <button class="btn-primary" onclick="openMsgModal()">
        <i class="fas fa-paper-plane"></i> Nova Mensagem
      </button>
    </div>

    <div class="msg-open">
      <div class="msg-open-header">
        <div>
          <div class="msg-open-subject">${msg.assunto}</div>
          <div class="msg-open-meta">
            De: <strong>${sender ? sender.nome : '?'}</strong> &nbsp;→&nbsp;
            Para: <strong>${receiver ? receiver.nome : '?'}</strong>
            &nbsp;·&nbsp; ${msg.data}
          </div>
        </div>
      </div>
      <div class="msg-open-body">${msg.corpo}</div>
      <div class="msg-reply-bar">
        <input type="text" id="replyInput" placeholder="Responder...">
        <button class="btn-primary" onclick="sendReply(${msg.de}, '${msg.assunto}')">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;
}

function sendReply(toId, subject) {
  const input = document.getElementById('replyInput');
  const text  = input.value.trim();
  if (!text) return;

  MENSAGENS.push({
    id: Date.now(),
    de: currentUser.id,
    para: toId,
    assunto: `Re: ${subject}`,
    corpo: text,
    data: new Date().toLocaleString('pt-BR'),
    lida: false
  });

  input.value = '';
  showToast('Resposta enviada! ✉️');
}



function openMsgModal() {
  const select = document.getElementById('msgTo');
  select.innerHTML = USUARIOS
    .filter(u => u.id !== currentUser.id)
    .map(u => `<option value="${u.id}">${u.avatar} ${u.nome} (${getRoleLabel(u.role)})</option>`)
    .join('');

  document.getElementById('msgModal').classList.remove('hidden');
}

function sendMessage() {
  const toId    = parseInt(document.getElementById('msgTo').value);
  const subject = document.getElementById('msgSubject').value.trim();
  const body    = document.getElementById('msgBody').value.trim();

  if (!subject || !body) { showToast('Preencha todos os campos! ⚠️'); return; }

  MENSAGENS.push({
    id: Date.now(),
    de: currentUser.id,
    para: toId,
    assunto: subject,
    corpo: body,
    data: new Date().toLocaleString('pt-BR'),
    lida: false
  });

  document.getElementById('msgSubject').value = '';
  document.getElementById('msgBody').value    = '';
  closeModal('msgModal');
  showToast('Mensagem enviada com sucesso! ✉️');
  updateBadges();
  if (currentPage === 'mensagens') navigate('mensagens', null);
}



function renderAvisos(el) {
  const isStaff = currentUser.role !== 'pai';

  el.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">📢 Avisos</h2>
      ${isStaff ? `<button class="btn-primary" onclick="openAvisoModal()"><i class="fas fa-plus"></i> Novo Aviso</button>` : ''}
    </div>

    <div>
      ${AVISOS.map(renderAvisoCard).join('')}
    </div>
  `;
}

function renderAvisoCard(aviso) {
  const badgeMap = { geral: 'badge-geral 📢 Geral', reuniao: 'badge-reuniao 🤝 Reunião', evento: 'badge-evento 🎉 Evento', urgente: 'badge-urgente 🚨 Urgente' };
  const [cls, label] = (badgeMap[aviso.categoria] || 'badge-geral 📢 Geral').split(' ').reduce((acc, w, i) => {
    if (i === 0) acc[0] = w; else acc[1] = (acc[1] || '') + (i > 1 ? ' ' : '') + w;
    return acc;
  }, []);

  const badgeParts = badgeMap[aviso.categoria].split(' ');
  const badgeCls   = badgeParts[0];
  const badgeTxt   = badgeParts.slice(1).join(' ');

  return `
    <div class="aviso-card ${aviso.categoria}">
      <div class="aviso-header">
        <span class="aviso-badge ${badgeCls}">${badgeTxt}</span>
        <div class="aviso-title">${aviso.titulo}</div>
      </div>
      <div class="aviso-body">${aviso.corpo}</div>
      <div class="aviso-meta">
        <span><i class="fas fa-user"></i> ${aviso.autor}</span>
        <span><i class="fas fa-calendar"></i> ${aviso.data}</span>
      </div>
    </div>
  `;
}

function openAvisoModal() {
  document.getElementById('avisoModal').classList.remove('hidden');
}

function publishAviso() {
  const titulo = document.getElementById('avisoTitle').value.trim();
  const corpo  = document.getElementById('avisoBody').value.trim();
  const cat    = document.getElementById('avisoCategoria').value;

  if (!titulo || !corpo) { showToast('Preencha todos os campos! ⚠️'); return; }

  AVISOS.unshift({
    id: Date.now(),
    titulo,
    corpo,
    categoria: cat,
    autor: currentUser.nome,
    data: new Date().toLocaleDateString('pt-BR'),
    authorId: currentUser.id
  });

  document.getElementById('avisoTitle').value = '';
  document.getElementById('avisoBody').value  = '';
  closeModal('avisoModal');
  showToast('Aviso publicado! 📢');
  navigate('avisos', null);
}



function renderAgenda(el) {
  const isStaff = currentUser.role !== 'pai';

  el.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">📅 Agenda</h2>
      ${isStaff ? `<button class="btn-primary" onclick="openEventoModal()"><i class="fas fa-plus"></i> Novo Evento</button>` : ''}
    </div>

    <div class="agenda-grid">
      <div class="card">
        <div class="cal-header">
          <button class="cal-nav" onclick="changeMonth(-1)"><i class="fas fa-chevron-left"></i></button>
          <div class="cal-month" id="calMonth"></div>
          <button class="cal-nav" onclick="changeMonth(1)"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div class="cal-grid" id="calGrid"></div>
      </div>

      <div>
        <div class="feed-section-title">🗓️ Todos os Eventos</div>
        <div class="event-list" id="eventList"></div>
      </div>
    </div>
  `;

  renderCalendar();
  renderEventList();
}

function renderCalendar() {
  const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const DIAS  = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];

  document.getElementById('calMonth').textContent = `${MESES[calendarDate.getMonth()]} ${calendarDate.getFullYear()}`;

  const grid = document.getElementById('calGrid');
  if (!grid) return;
  grid.innerHTML = DIAS.map(d => `<div class="cal-day-name">${d}</div>`).join('');

  const firstDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay();
  const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
  const today = new Date();

  
  const eventDays = EVENTOS
    .map(e => new Date(e.data))
    .filter(d => d.getMonth() === calendarDate.getMonth() && d.getFullYear() === calendarDate.getFullYear())
    .map(d => d.getDate());

  for (let i = 0; i < firstDay; i++) {
    grid.innerHTML += `<div class="cal-day empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate() && calendarDate.getMonth() === today.getMonth() && calendarDate.getFullYear() === today.getFullYear();
    const hasEvent = eventDays.includes(d);
    grid.innerHTML += `<div class="cal-day ${isToday ? 'today' : ''} ${hasEvent ? 'has-event' : ''}">${d}</div>`;
  }
}

function changeMonth(dir) {
  calendarDate.setMonth(calendarDate.getMonth() + dir);
  renderCalendar();
}

function renderEventList() {
  const list = document.getElementById('eventList');
  if (!list) return;

  const sorted = [...EVENTOS].sort((a, b) => new Date(a.data) - new Date(b.data));
  list.innerHTML = sorted.map(renderEventoItem).join('');
}

function renderEventoItem(evt) {
  const d = new Date(evt.data);
  const MESES = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];
  return `
    <div class="event-item">
      <div class="event-date">
        <div class="e-day">${String(d.getDate()).padStart(2,'0')}</div>
        <div class="e-mon">${MESES[d.getMonth()]}</div>
      </div>
      <div class="event-info">
        <div class="event-title">${evt.titulo}</div>
        <div class="event-desc">${evt.desc}</div>
        <div class="event-time"><i class="fas fa-clock"></i> ${evt.hora}</div>
      </div>
    </div>
  `;
}

function openEventoModal() {
  document.getElementById('eventoModal').classList.remove('hidden');
}

function addEvento() {
  const titulo = document.getElementById('eventoTitle').value.trim();
  const data   = document.getElementById('eventoData').value;
  const hora   = document.getElementById('eventoHora').value;
  const desc   = document.getElementById('eventoDesc').value.trim();

  if (!titulo || !data || !hora) { showToast('Preencha os campos obrigatórios! ⚠️'); return; }

  EVENTOS.push({ id: Date.now(), titulo, data, hora, desc });
  document.getElementById('eventoTitle').value = '';
  document.getElementById('eventoData').value  = '';
  document.getElementById('eventoHora').value  = '';
  document.getElementById('eventoDesc').value  = '';
  closeModal('eventoModal');
  showToast('Evento adicionado! 📅');
  navigate('agenda', null);
}


function renderAlunos(el) {
  let filtered = ALUNOS;

 
  if (currentUser.role === 'professora' && currentUser.turma) {
    filtered = ALUNOS.filter(a => a.turma === currentUser.turma);
  }

  el.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">👧 Alunos</h2>
      <div style="font-size:13px;color:var(--text-muted);">${filtered.length} aluno(s)</div>
    </div>

    <div class="alunos-grid">
      ${filtered.map(a => `
        <div class="aluno-card">
          <div class="aluno-emoji">${a.emoji}</div>
          <div class="aluno-name">${a.nome}</div>
          <div class="aluno-turma">${a.turma}</div>
          <div class="aluno-info">👤 ${a.responsavel}</div>
          <div class="aluno-tags">
            <span class="tag">📝 ${a.obs}</span>
          </div>
          <button class="btn-primary mt-8" style="width:100%;font-size:12px;padding:8px;" onclick="msgResponsavel('${a.responsavel}')">
            <i class="fas fa-envelope"></i> Contatar Responsável
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function msgResponsavel(nomeResp) {
  const user = USUARIOS.find(u => u.nome === nomeResp);
  openMsgModal();
  if (user) {
    setTimeout(() => {
      document.getElementById('msgTo').value = user.id;
    }, 100);
  }
}



function renderContatos(el) {
  const bgColors = ['var(--accent)', 'var(--secondary)', 'var(--purple)', 'var(--green)', 'var(--orange)'];

  el.innerHTML = `
    <div class="page-header">
      <h2 class="page-title">📒 Contatos</h2>
    </div>

    <div style="margin-bottom: 16px;">
      <h3 class="feed-section-title">👩‍🏫 Professoras</h3>
      <div class="contatos-list">
        ${USUARIOS.filter(u => u.role === 'professora').map((u, i) => `
          <div class="contato-item">
            <div class="contato-avatar" style="background:${bgColors[i % bgColors.length]};">${u.avatar}</div>
            <div class="contato-info">
              <div class="contato-name">${u.nome}</div>
              <div class="contato-role">${u.turma || 'Professora'}</div>
              <div class="contato-detail">${u.email}</div>
            </div>
            <div class="contato-actions">
              <button class="btn-icon" onclick="openMsgPara(${u.id})" title="Enviar mensagem">
                <i class="fas fa-envelope"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div style="margin-bottom: 16px;">
      <h3 class="feed-section-title">🏫 Direção & Coordenação</h3>
      <div class="contatos-list">
        ${USUARIOS.filter(u => u.role === 'diretor').map((u, i) => `
          <div class="contato-item">
            <div class="contato-avatar" style="background:${bgColors[(i+2) % bgColors.length]};">${u.avatar}</div>
            <div class="contato-info">
              <div class="contato-name">${u.nome}</div>
              <div class="contato-role">Direção / Coordenação</div>
              <div class="contato-detail">${u.email}</div>
            </div>
            <div class="contato-actions">
              <button class="btn-icon" onclick="openMsgPara(${u.id})" title="Enviar mensagem">
                <i class="fas fa-envelope"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    ${currentUser.role !== 'pai' ? `
    <div>
      <h3 class="feed-section-title">👨‍👩‍👧 Pais e Responsáveis</h3>
      <div class="contatos-list">
        ${USUARIOS.filter(u => u.role === 'pai').map((u, i) => `
          <div class="contato-item">
            <div class="contato-avatar" style="background:${bgColors[(i+1) % bgColors.length]};">${u.avatar}</div>
            <div class="contato-info">
              <div class="contato-name">${u.nome}</div>
              <div class="contato-role">Responsável · ${u.filho || ''} (${u.turma || ''})</div>
              <div class="contato-detail">${u.email}</div>
            </div>
            <div class="contato-actions">
              <button class="btn-icon" onclick="openMsgPara(${u.id})" title="Enviar mensagem">
                <i class="fas fa-envelope"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;
}

function openMsgPara(toId) {
  openMsgModal();
  setTimeout(() => {
    document.getElementById('msgTo').value = toId;
  }, 100);
}




function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

// Fechar modal ao clicar fora
document.addEventListener('click', function (e) {
  ['msgModal', 'avisoModal', 'eventoModal'].forEach(id => {
    const modal = document.getElementById(id);
    if (modal && !modal.classList.contains('hidden') && e.target === modal) {
      closeModal(id);
    }
  });
});



let toastTimer = null;

function showToast(msg) {
  const toast   = document.getElementById('toast');
  const toastMsg= document.getElementById('toastMsg');
  toastMsg.textContent = msg;
  toast.classList.remove('hidden');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}



function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('pt-BR');
}

// Enter no campo de login
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('loginPassword').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleLogin();
  });
  document.getElementById('loginEmail').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleLogin();
  });
});
