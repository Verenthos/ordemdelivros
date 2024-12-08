export const authors = [
    { name: 'C. S. Lewis', link: '/autor/lewis' },
    { name: 'J.R.R. Tolkien', link: '/autor/tolkien' },
    { name: 'Stephenie Meyer', link: '/autor/meyer' },
    { name: 'Machado de Assis', link: '/autor/machado' },
    { name: 'José de Alencar', link: '/autor/alencar' },
    { name: 'Clarice Lispector', link: '/autor/lispector' },
    { name: 'Graciliano Ramos', link: '/autor/ramos' },
    { name: 'Jorge Amado', link: '/autor/amado' },
  ].sort((a, b) => a.name.localeCompare(b.name));