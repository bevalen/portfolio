'use server'

import { DATA } from "@/data/resume";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';

// Remove the Font import and Font.register section

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Times-Roman',
    },
    section: {
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        fontFamily: 'Helvetica-Bold',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
        fontFamily: 'Helvetica-Bold',
        color: '#333333',
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
        fontFamily: 'Times-Roman',
    },
    bold: {
        fontFamily: 'Times-Bold',
    },
    referenceItem: {
        marginBottom: 15,
    },
});

const formatLink = (title: string, href: string) => {
    if (title === 'Phone') {
        // Remove 'tel:' and '+1', then format
        const digits = href.replace('tel:', '').replace('+1', '');
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (title === 'Email') {
        return href.replace('mailto:', '');
    }
    return href;
};

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.title}>{DATA.name}</Text>
                <Text style={styles.text}>{DATA.location}</Text>
                <Text style={styles.text}>{DATA.contact.email}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Summary</Text>
                <Text style={styles.text}>{DATA.summary}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Work Experience</Text>
                {DATA.work.map((job) => (
                    <View key={job.company} style={{ marginBottom: 10 }}>
                        <Text style={[styles.text, styles.bold]}>{job.company} - {job.title}</Text>
                        <Text style={styles.text}>{job.start} - {job.end || 'Present'}</Text>
                        <Text style={styles.text}>{job.description}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Education</Text>
                {DATA.education.map((edu) => (
                    <View key={edu.school} style={{ marginBottom: 10 }}>
                        <Text style={[styles.text, styles.bold]}>{edu.school} - {edu.degree}</Text>
                        <Text style={styles.text}>{edu.start} - {edu.end}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Skills</Text>
                {Object.entries(DATA.skills).map(([category, skillList]) => (
                    <View key={category} style={{ marginBottom: 10 }}>
                        <Text style={[styles.text, styles.bold]}>{category}:</Text>
                        <Text style={styles.text}>
                            {skillList.join(', ')}
                        </Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>References</Text>
                {DATA.references.map((ref) => (
                    <View key={ref.name} style={styles.referenceItem}>
                        <Text style={[styles.text, styles.bold]}>{ref.name} - {ref.title}</Text>
                        <Text style={styles.text}>{ref.company}</Text>
                        <Text style={styles.text}>{ref.description}</Text>
                        {ref.links.map((link) => (
                            <Text key={link.title} style={styles.text}>
                                <Text style={styles.bold}>{link.title}:</Text> {formatLink(link.title, link.href)}
                            </Text>
                        ))}
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Personality Profile</Text>
                {Object.entries(DATA.personality).map(([key, value]) => (
                    <View key={key} style={{ marginBottom: 10 }}>
                        <Text style={[styles.text, styles.bold]}>{value.type} - {value.title}</Text>
                        <Text style={styles.text}>{value.description}</Text>
                        <Text style={styles.text}>Attributes: {value.attributes.join(', ')}</Text>
                    </View>
                ))}
            </View>
        </Page>
    </Document>
);

export async function generateResume() {
    const pdfBlob = await pdf(<ResumePDF />).toBlob();
    return pdfBlob;
}