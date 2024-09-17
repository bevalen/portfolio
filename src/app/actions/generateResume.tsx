'use server'

import { DATA } from "@/data/resume";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    section: {
        margin: 10,
        padding: 10,
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 5,
    },
    text: {
        fontSize: 12,
        marginBottom: 5,
    },
});

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
                    <View key={job.company}>
                        <Text style={styles.text}>{job.company} - {job.title}</Text>
                        <Text style={styles.text}>{job.start} - {job.end || 'Present'}</Text>
                        <Text style={styles.text}>{job.description}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Education</Text>
                {DATA.education.map((edu) => (
                    <View key={edu.school}>
                        <Text style={styles.text}>{edu.school} - {edu.degree}</Text>
                        <Text style={styles.text}>{edu.start} - {edu.end}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.subtitle}>Skills</Text>
                <Text style={styles.text}>{DATA.skills.join(', ')}</Text>
            </View>
        </Page>
    </Document>
);

export async function generateResume() {
    const pdfBlob = await pdf(<ResumePDF />).toBlob();
    return pdfBlob;
}