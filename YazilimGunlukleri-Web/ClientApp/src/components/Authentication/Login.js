import React, { Component } from "react";

export default class Login extends Component {
  displayName = Login.name;

  render() {
    return (
      <div>
        <form action="" method="POST">
          <div className="form-group">
            <h4>Giriş Yap</h4>
            <input
              className="form-input"
              type="email"
              placeholder="E-Mail Adresiniz."
              required
            />
            <input
              className="form-input"
              type="password"
              placeholder="Şifreniz"
              required
            />
            <input
              className="button button-success"
              type="submit"
              value="GİRİŞ"
            />
          </div>
        </form>
      </div>
    );
  }
}
