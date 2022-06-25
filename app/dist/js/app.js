var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let btnFindUsers = document.querySelector('#find-users');
let btnFindTasks = document.querySelector('#find-tasks');
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        let users = yield fetch('http://localhost:3000/api/v1/user/', { method: 'GET' });
        let userData = yield users;
        return userData.json();
    });
}
function getTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        let tasks = yield fetch('http://localhost:3000/api/v1/task/', { method: 'GET' });
        let taskData = yield tasks;
        return taskData.json();
    });
}
btnFindUsers === null || btnFindUsers === void 0 ? void 0 : btnFindUsers.addEventListener("click", event => {
    const promise = getUsers();
    promise.then(data => {
        console.log(data);
    });
});
btnFindTasks === null || btnFindTasks === void 0 ? void 0 : btnFindTasks.addEventListener('click', event => {
    const promise = getTasks();
    promise.then(data => {
        console.log(data);
    });
});
//# sourceMappingURL=app.js.map