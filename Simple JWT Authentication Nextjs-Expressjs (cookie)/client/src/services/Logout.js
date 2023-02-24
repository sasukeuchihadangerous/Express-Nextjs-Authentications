import AuthService from "@/API/AuthService";

const Logout = (router) => {
    const response =  AuthService.logout();
    if(!response.data?.error) {
        router.replace(router.asPath);
    }
}
export default Logout