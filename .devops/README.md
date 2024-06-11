[Back](../README.md)

## Devops
This folder contains `Devops utility scripts`

---

### VMs
A `yaml file` that configure `Virtual Machines` that are needed in this project.

```yaml
# simple example
apps-k8s:
  k8s: true
  os: 
    distro: ubuntu
    version: 24.04
services-k8s:
  k8s: true
  os: 
    distro: ubuntu
    version: 24.04
```