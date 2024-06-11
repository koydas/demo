export const vms_file = '.devops/vms.yaml'
export const fs_options = { encoding: 'utf8' }
export function getVms() {
    return parse(
        readFileSync(vms_file, )
    )
}
