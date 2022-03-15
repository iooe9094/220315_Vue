Vue.component("child-component", {
    template:
    /* html */
    `
        <div class="container">
            <p>Child Component 입니다</p>
        </div>
    `
});

Vue.component("child-article", {
    template:
    /* html */
    `
        <div>
            <div class="article">
                lorem ipsumlorem ipsumlorem ipsum
                <child-component></child-component>
            </div>
        </div>
    `
});

new Vue({
    el: `#app`
});