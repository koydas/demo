import { fs_options, vms_file } from "../file"

describe('file.test.js', () => {
    it('vms_file', () => {
        expect(vms_file).toEqual('.devops/vms.yaml')
    })

    it('fs_options', () => {
        expect(fs_options).toEqual({ encoding: 'utf8' })
    })
    
})