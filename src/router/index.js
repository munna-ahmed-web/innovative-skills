import { createRouter, createWebHistory } from "vue-router";
import AdminLayout from "@/layout/AdminLayout.vue";
import AdminHome from "@/pages/admin-panel/admin-home/AdminHome.vue";
import CourseCategory from "@/pages/admin-panel/admin-course-category/CourseCategory.vue";
import CourseInfoTest from "@/pages/admin-panel/admin-course-info-test/CourseInfoTest.vue";
import CourseInfo from "@/pages/admin-panel/admin-course-info/CourseInfo.vue";
import CourseActivation from "@/pages/admin-panel/admin-course-activation/CourseActivation.vue";
import CourseAdvisor from "@/pages/admin-panel/admin-course-advisor/CourseAdvisor.vue";
import CourseInstructor from "@/pages/admin-panel/admin-course-instrcutor/CourseInstructor.vue";
import CoursePopUpPrpmo from "@/pages/admin-panel/admin-course-popup-promo/CoursePopUpPrpmo.vue";
import ServicePageData from "@/pages/admin-panel/admin-service-page-data/ServicePageData.vue";
import StudentJobSuccess from "@/pages/admin-panel/admin-student-job-success/StudentJobSuccess.vue";
import WebinarPageData from "@/pages/admin-panel/admin-webinar-page-data/WebinarPageData.vue";
import CourseContent from "@/pages/admin-panel/admin-course-content/CourseContent.vue";
import CourseContentLink from "@/pages/admin-panel/admin-course-content-link/CourseContentLink.vue";
import WorkshopAttendantList from "@/pages/admin-panel/admin-workshop-attendant-list/WorkshopAttendantList.vue";
import CourseBatch from "@/pages/admin-panel/admin-course-batch/CourseBatch.vue";
import CourseAttendance from "@/pages/admin-panel/admin-course-attendance/CourseAttendance.vue";
import CourseEnroll from "@/pages/admin-panel/admin-course-enroll/CourseEnroll.vue";
import AcceptedEnrollmentList from "@/pages/admin-panel/admin-accepted-enrollment-list/AcceptedEnrollmentList.vue";
import BootcampActivation from "@/pages/admin-panel/admin-bootcamp-activation/BootcampActivation.vue";
import BootCampData from "@/pages/admin-panel/admin-bootcamp-data/BootCampData.vue";
import BootCampArea from "@/pages/admin-panel/admin-bootcamp-area/BootCampArea.vue";
import WorkshopTopic from "@/pages/admin-panel/admin-workshop-topic/WorkshopTopic.vue";
import CourseFeedback from "@/pages/admin-panel/admin-course-feedback/CourseFeedback.vue";
import StudentReview from "@/pages/admin-panel/admin-student-review/StudentReview.vue";
import GalleryInfo from "@/pages/admin-panel/admin-gallery-info/GalleryInfo.vue";
import ProjectInfo from "@/pages/admin-panel/admin-project-info/ProjectInfo.vue";
import ClientFeedBack from "@/pages/admin-panel/admin-client-feedback/ClientFeedBack.vue";
import AllStudents from "@/pages/admin-panel/admin-all-students/AllStudents.vue";
import AllAdminModerator from "@/pages/admin-panel/admin-allAdmin-moderator/AllAdminModerator.vue";
import UserPanelLayout from "@/layout/UserPanelLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: UserPanelLayout
    },
    
    {
      path: "/admin-dashboard",
      component: AdminLayout,
      children: [
        {
          path: "home",
          component: AdminHome,
        },
        {
          path: "course-category",
          component: CourseCategory,
        },
        {
          path: "course-info-test",
          component: CourseInfoTest,
        },
        {
          path: "course-info",
          component: CourseInfo,
        },
        {
          path: "course-activation",
          component: CourseActivation,
        },
        {
          path: "course-advisor",
          component: CourseAdvisor,
        },
        {
          path: "course-instructor",
          component: CourseInstructor,
        },
        {
          path: "course-popup-promo",
          component: CoursePopUpPrpmo,
        },
        {
          path: "service-page-data",
          component: ServicePageData,
        },
        {
          path: "student-job-success",
          component: StudentJobSuccess,
        },
        {
          path: "webinar-page-data",
          component: WebinarPageData,
        },
        {
          path: "course-content",
          component: CourseContent,
        },
        {
          path: "course-content-link",
          component: CourseContentLink,
        },
        {
          path: "workshop-attendant-list",
          component: WorkshopAttendantList,
        },
        {
          path: "course-batch",
          component: CourseBatch,
        },
        {
          path: "course-attendance",
          component: CourseAttendance,
        },
        {
          path: "course-enroll",
          component: CourseEnroll,
        },
        {
          path: "accecpted-enrollment-list",
          component: AcceptedEnrollmentList,
        },
        {
          path: "bootcamp-activation",
          component: BootcampActivation,
        },
        {
          path: "bootcamp-data",
          component: BootCampData,
        },
        {
          path: "bootcamp-area",
          component: BootCampArea,
        },
        {
          path: "workshop-topic",
          component: WorkshopTopic,
        },
        {
          path: "course-feedback",
          component: CourseFeedback
        },
        {
          path: "student-review",
          component: StudentReview
        },
        {
          path: "gallery-info",
          component: GalleryInfo
        },
        {
          path: "project-info",
          component: ProjectInfo
        },
        {
          path: "client-feedback",
          component: ClientFeedBack
        },
        {
          path: "all-student",
          component: AllStudents
        },
        {
          path: "all-admin-moderator",
          component: AllAdminModerator
        },
      ],
    },
  ],
});

export default router;
