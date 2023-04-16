class contact extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= ` <div class="container">
            <section class="contact" id="contact">
        <div class="max-width">
            <h2 class="title" id="text-0">Contact me</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Get in Touch</div>
                    <p>Let's just make a community for coders to help each other.</p>
                    <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Nishant Soni</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">jaipur, Rajasthan</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">tusarsoni1624@gmail.com</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-mobile"></i>
                            <div class="info">
                                <div class="head">Mobile</div>
                                <div class="sub-title">+91 8504845143</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    <div class="text">Message me</div>
                    <form action="/contact_form" method="post">
                        <div class="fields">
                            <div class="field name">
                                <input name="name" type="text" placeholder="Name" required>
                            </div>
                            <div class="field email">
                                <input name="email" type="email" placeholder="Email" required>
                            </div>
                        </div>
                        <div class="field">
                            <input name="subject" type="text" placeholder="Subject" required>
                        </div>
                        <div class="field textarea">
                            <textarea name="message" cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area contact-me">
                            <div class="contact-me">
                            <a class="btn" href="mailto:tusarsoni1624@gmail.com">  <button type="submit" name="submit">Send message</button></a>
                            </div>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    </div>`
    }
};


customElements.define('app-contact', contact);
