<template>
  <div class="window-height window-width row justify-center items-center">
    <q-card class="shadow-24" style="width: 400px; height: 340px">
      <q-card-section class="text-center">
        <q-img
          src="../LogoImages/logo.png"
          style="height: 140px; max-width: 150px"
        />
        <div class="text-h6">Signin To Aqua-Crm</div>
        <hr />
      </q-card-section>
      <q-card-section>
        <q-btn
          color="orange-10"
          flat
          class="full-width"
          icon="eva-google-outline"
          @click="handleGoogleLogin"
          size="25px"
        />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import notificationHelpers from "@/helpers/notificationHelpers";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { createErrorNotification, createSuccessNotification } =
      notificationHelpers;
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const Router = useRouter();
    const handleGoogleLogin = () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result);
          Router.push("/home");
          createSuccessNotification("succeffully logged in");
        })
        .catch(() => {
          createErrorNotification("please try again");
        });
    };
    return {
      handleGoogleLogin,
    };
  },
};
</script>
