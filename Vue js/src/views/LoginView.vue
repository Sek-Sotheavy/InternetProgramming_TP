<script >

export default {
        
        setup() {
        },
        data() {
                return {
                        email: "",
                        password: "",
                };
        },
        async mounted() {
                console.log("hello world");
        },
        methods: {
                async onSubmit(e) {
                        e.preventDefault();
                        const res = await fetch("http://localhost:3001/auth/login", {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                        "Content-type": "application/json",
                                },
                                body: JSON.stringify({
                                        email: this.email,
                                        password: this.password,
                                }),
                        });

                        const result = await res.json();
                        if (!result.success) {
                                alert(result.error);
                                return;
                        }

                        this.$router.push({ name: "dashboard" });
                },
        },
};
</script>

<template>
        <main>
                <div class="bg-blue-100 border border-black m-auto" style="width: 70%; border-radius: 50px;">
                        <div class="grid grid-cols-2 gap-5 ">
                                <div class="imgcontainer flex justify-center ">
                                        <img src="../assets/login.png" alt="Avatar" class="avatar" />
                                </div>
                                <div class=" ">
                                        <form @submit="onSubmit" method="post">
                                                <h1 class="text-center text-2xl font-bold">Sign Up</h1>
                                                <div class="container">
                                                        <div>
                                                                <label for="email"><b>Username</b></label><br>
                                                                <input v-model="email" type="text" placeholder="Enter email"
                                                                        name="email" class="w-96" required />
                                                        </div>

                                                        <div>
                                                                <label for="psw"><b>Password</b></label><br>
                                                                <input v-model="password" type="password"
                                                                        placeholder="Enter Password" class="w-96" name="psw"
                                                                        required />
                                                        </div>

                                                        <div class="flex justify-center">
                                                                <button type="submit" > Login</button>
                                                        </div>
                                                        
                                                </div>

                                                <div class="container" style="display: flex;justify-content: end;">
                                                        <RouterLink to="/signup">Create your new account here.</RouterLink>
                                                </div>
                                        </form>
                                </div>
                        </div>

                </div>
        </main>
</template>

<style scoped>
/* Bordered form */
form {
        padding: 15px;
        /* border: 3px solid #f1f1f1; */
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
        width: 100%;
        border-radius: 15px;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
}

/* Set a style for all buttons */
button {
        background-color: #04aa6d;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 40%;
        border-radius: 20px;
}

/* Add a hover effect for buttons */
button:hover {
        opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
        width: auto;
        padding: 10px 18px;
        background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
        width: fit-content;
        height: fit-content;
        /* text-align: center; */
        margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
        width: 70%;
        height: fit-content;
}

/* Add padding to containers */
.container {
        padding: 16px;
}

/* The "Forgot password" text */
span.psw {
        float: right;
        padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
        span.psw {
                display: block;
                float: none;
        }

        .cancelbtn {
                width: 100%;
        }
}
</style>


