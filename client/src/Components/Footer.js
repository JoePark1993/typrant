import React from 'react';

class StickyFooter extends React.Component {
    render() {
        return (
            <footer class = "page-footer font-small indigo">
            <div class="footer-copyright text-center py-3">
            <a href="typrant.com"> Typrant </a>
            <a href='./about'> About </a>
            <a href='./contribute'> Contribute </a>
            <a href='./contact'> Contact </a>
            <a href='./login'> Login </a>
            <a href='./buy'> Buy </a>

            </div>
            </footer>
        )
    }
}

export default StickyFooter;