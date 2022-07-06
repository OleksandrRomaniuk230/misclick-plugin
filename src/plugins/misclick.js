export default{
    install:(app,options)=>{
        app.directive("misclick",(el,click,val)=>{
            const select = this.$el.querySelector(el);
            const active = document.getElementsByClassName(click)[0];
            window.addEventListener("click", (e) => {
              let target = e.target;
              if (target != select && active.toString() != target.toString()) {
               val = false;
              }
            });
        })
    }
}