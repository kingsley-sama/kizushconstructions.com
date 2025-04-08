# Vendored Gems

The puppet language server is designed to run within the Puppet Agent ruby environment which means no access to Native Extensions or Gem bundling.

This means any Gems required outside of Puppet Agent for the language server must be vendored in this directory and the load path modified in the `puppet-languageserver` file.

Note - To comply with Licensing, the Gem source should be MIT licensed or even more unrestricted.

Note - To improve the packaging size, test files etc. were stripped from the Gems prior to committing.

Gem List
--------

* puppet-lint (https://github.com/puppetlabs/puppet-lint.git ref v4.2.4)
* hiera-eyaml (https://github.com/voxpupuli/hiera-eyaml ref v2.1.0)
* puppetfile-resolver (https://github.com/puppetlabs/puppetfile-resolver.git ref v0.6.3)
* molinillo (https://github.com/CocoaPods/Molinillo.git ref 0.6.6)
* puppet-strings (https://github.com/puppetlabs/puppet-strings.git ref v4.1.2)
* yard (https://github.com/lsegal/yard.git ref v0.9.24)

