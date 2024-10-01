'use server'

import { DATA } from "@/data/resume";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, pdf } from '@react-pdf/renderer';

// Remove the Font import and Font.register section

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 30,
        fontFamily: 'Helvetica',
    },
    header: {
        marginBottom: 20,
        alignItems: 'center', // Center the content
        justifyContent: 'center', // Center the content
    },
    name: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    title: {
        fontSize: 18,
        color: '#666',
        marginBottom: 10,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5,
    },
    contactInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    contactItem: {
        fontSize: 10,
    },
    experienceItem: {
        marginBottom: 15,
    },
    jobTitle: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    jobDetails: {
        fontSize: 10,
        color: '#666',
    },
    jobDescription: {
        fontSize: 10,
        marginTop: 5,
    },
    skillCategory: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#333',
        textDecoration: 'underline',
    },
    skillList: {
        fontSize: 10,
        marginBottom: 10,
    },
    personalityItem: {
        marginBottom: 10,
    },
    personalityType: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    personalityDescription: {
        fontSize: 10,
    },
});

const formattedTel = `(${DATA.contact.tel.slice(2, 5)}) ${DATA.contact.tel.slice(5, 8)}-${DATA.contact.tel.slice(8)}`;

const ResumePDF = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.name}>{DATA.name}</Text>
                <Text style={styles.title}>US Marine | Technology Entrepreneur | Strategic Problem Solver</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Professional Summary</Text>
                <Text style={styles.jobDescription}>{DATA.summary}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Contact</Text>
                <Text style={styles.contactItem}>{formattedTel}</Text>
                <Text style={styles.contactItem}>{DATA.contact.email}</Text>
                <Text style={styles.contactItem}>{DATA.location}</Text>
                <Text style={styles.contactItem}>{DATA.contact.website}</Text>
                <Text style={styles.contactItem}>{DATA.contact.social.LinkedIn.url}</Text>
                <Text style={styles.contactItem}>{DATA.contact.social.GitHub.url}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Experience</Text>
                {DATA.work.map((job) => (
                    <View key={job.company} style={styles.experienceItem}>
                        <Text style={styles.jobTitle}>{job.title}</Text>
                        <Text style={styles.jobDetails}>{job.company} | {job.location} | {job.start} - {job.end}</Text>
                        <Text style={styles.jobDescription}>{job.description}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Personality</Text>
                {Object.entries(DATA.personality).map(([key, value]) => (
                    <View key={key} style={styles.personalityItem}>
                        <Text style={styles.personalityType}>{value.type} - {value.title}</Text>
                        <Text style={styles.personalityDescription}>{value.description}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Skills</Text>
                {Object.entries(DATA.skills).map(([category, skillList]) => (
                    <View key={category} style={{ marginBottom: 10 }}>
                        <Text style={styles.skillCategory}>{category}</Text>
                        <Text style={styles.skillList}>
                            {skillList.map(skill => skill.name).join(', ')}
                        </Text>
                    </View>
                ))}
            </View>
        </Page>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>References</Text>
                {DATA.references.map((reference) => (
                    <View key={reference.name} style={styles.experienceItem}>
                        <Text style={styles.jobTitle}>{reference.name}</Text>
                        <Text style={styles.jobDetails}>{reference.title} | {reference.company}</Text>
                        <Text style={styles.jobDescription}>
                            {reference.description || ''}
                        </Text>
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