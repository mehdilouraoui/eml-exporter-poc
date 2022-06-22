const fs = require('fs')

const BACK = " \n"
const TO = "To: "
const FROM = "From: "
const SUBJECT = "Subject: "
const MAIL_TYPE = "Content-Type: text/html" + BACK
const SPACE = "" + '\n'
const X_UNSET_HEADER = 'X-Unset: '

const createMailBody = (body) => SPACE + `<!DOCTYPE html><html><head></head><body style='background-color: black; color: white'>${body}</body></html>`

const isPstFolder = (elt) => {
    return elt.type === "folder" || elt.type === "rootFolder";
};

const isPstEmail = (elt) => {
    return elt.type === "email";
};

/**
 * Generate an EML from the given object.
 *
 * @param {string} from
 * @param {string} to
 * @param {string} type
 * @param {number} isSent
 * @param {string} subject
 * @param {string} body
 */

const generateEml = (from , to, isSent, subject, body) => {
    const mailFrom = FROM + from + BACK
    const mailTo = TO + to + BACK
    const mailType = MAIL_TYPE
    const mailHeadersSentState = X_UNSET_HEADER + isSent + BACK
    const mailSubject = SUBJECT + subject + BACK
    const mailBody = createMailBody(body)

    return mailFrom + mailTo + mailType + mailHeadersSentState + mailSubject + mailBody
}

const createDir = (dirPath) => {
    fs.mkdirSync(process.cwd() + dirPath, { recursive: true }, (error) => {
        error ? 
            console.error('Error create dir: ', error)
            : console.log('directory created!') 
    })
}

/**
 * Create an EML file with a parent wrapper folder and file name as a title.
 */
    
const createEmlFile = (filePath, fileName, fileContent) => {
    const { from, to, subject, contentText } = fileContent
    const content = generateEml(from.email, to[0].email, 1, subject, contentText)


    fs.writeFile(process.cwd() + filePath + `/${fileName}.eml`, content, (error) => {
        error ? 
            console.error('Error create file : ', error)
            : console.log('file created!')
    })
}

const exportEml = (pst) => {
    if (isPstFolder(pst)) {
        pst.children?.forEach((child) => {
            if (isPstEmail(child)) {
                const filename = child.subject
                const wrapPath = child.elementPath + `/${child.subject}`
                
                createDir(wrapPath)
                createEmlFile(wrapPath, filename, child)

            } else {
                // const originalPath = child.elementPath.substring(1)
                const folderPath = child.elementPath
                createDir(folderPath)
            }
            exportEml(child);
        });
    }
};

exports.exportEml = exportEml