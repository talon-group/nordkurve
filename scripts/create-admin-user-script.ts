import { createOrUpdateUser } from "@/src/repositories/user-repository";
import { createOrUpdateRole } from "@/src/repositories/role-repository";
import { ADMIN_ROLE_ID } from "@/src/consts/roles-consts";

const adminEmail = process.env.ADMIN_EMAIL;

async function makeAdminUser() {
  if (!adminEmail) {
    throw new Error(
      "Please provide an admin email. You can do this in the make-admin-user-script.ts file.",
    );
  }

  const roleAdmin = await createOrUpdateRole({
    id: ADMIN_ROLE_ID,
    name: "admin",
  });

  console.log({ roleAdmin });

  const userAdmin = await createOrUpdateUser({
    email: adminEmail,
    name: "admin",
    role: {
      id: ADMIN_ROLE_ID,
    },
  });

  console.log({ userAdmin });
}

makeAdminUser();
