import chefClaudeLogo from "../assets/chef-claude.png"

export default function Header() {
    return (
        <header>
            <img className="header-img" src={chefClaudeLogo} />
            <h1 className="header-title">Chef Claude</h1>
        </header>
    )
}