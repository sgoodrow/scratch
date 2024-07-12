# Treat all targets as phony - https://stackoverflow.com/q/44492805
.PHONY: *
MAKEFLAGS += --always-make

help:
	@echo
	@echo "Usage: make [target]"
	@echo
	@echo " * scratch-script            run the scratch script entrypoint"
	@echo " * scratch-app               run the scratch app"
	@echo " * test                      start the test runner"

# use Bash with brace expansion
.SHELLFLAGS = -cB
SHELL = /bin/bash

define nvm
    source $(NVM_DIR)/nvm.sh && nvm use
endef

scratch-script:
	@$(nvm) && yarn run tsx ./src/scratch/main.ts

scratch-app:
	@$(nvm) && yarn run next dev --turbo

test:
	@$(nvm) && yarn run jest --watch
