import axios from 'axios'
import { program } from 'commander'

program
    .name("GithubAPI-node-cli")
    .description("Operating the github repository by node cli")
    .version("0.0.1")

program
    .command("create")
    .description("To create a new repository")
    .action()

program
    .command("list")
    .description("To list all repositories")
    .action(() => {
        axios({
            method: "GET",
            url: "https://api.github.com/users/scoheart/repos"
        }).then(res => {

            const repos = res.data
            repos.forEach((element, index) => {
                console.log(index + 1, element.name)
            });

        })
    })

program.parse()