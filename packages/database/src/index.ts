import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const newContact = await prisma.contactForm.create({
      data: {
        name: 'Empresa1',
        contactEmail: 'wvL2c@example.com',
        message: 'teste',
      }
    })
    console.log("Novo formulário de contato criado:", newContact);

    const allContacts = await prisma.contactForm.findMany();
    console.log("Todos os formulários de contato:", allContacts);
  } catch (error) {
    console.error("Erro ao criar formulário de contato:", error);
  } finally {
    await prisma.$disconnect();
  }
}


main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })